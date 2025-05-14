import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../../shared/services/customer.service';
import { take, tap } from 'rxjs';
import { ICustomer } from '../../../shared/interfaces/customer.interface';
import { ProductService } from '../../../shared/services/product.service';
import { IProduct } from '../../../shared/interfaces/product.interface';
import { OrderService } from '../../../shared/services/order.service';
import { IOrder } from '../../../shared/interfaces/order.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'cem-add-order',
  standalone: false,
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.scss'
})
export class AddOrderComponent implements OnInit {
  
  createOrderForm!: FormGroup;
  customerList: ICustomer[] = [];
  productList: IProduct[] = [];
  maxQuantity: number = 0;
  submitButtonText = 'Aggiungi';

  private _fb = inject(FormBuilder);
  private _rt = inject(Router);
  private _customerService = inject(CustomerService);
  private _productService = inject(ProductService);
  private _orderService = inject(OrderService);

  ngOnInit(): void {
    this.initializeForm();
    this.loadCustomers();
    this.loadProducts();

    this.createOrderForm.get('quantity')?.valueChanges.subscribe(() => this.calculateTotal());
  }

  initializeForm() {
    this.createOrderForm = this._fb.group({
      description: this._fb.control<string>('', [Validators.required, Validators.maxLength(50)]),
      customerId: this._fb.control<number | null>(null, [Validators.required]),
      productId: this._fb.control<number | null>(null, [Validators.required]),
      unitPrice: this._fb.control({ value: 0, disabled: true }),
      quantity: this._fb.control<number | null>(null, [Validators.required, Validators.min(1)]),
      total: this._fb.control({ value: 0, disabled: true }),
    });

    this.createOrderForm.get('productId')?.valueChanges.subscribe(() => this.onProductChange());
  }

  loadCustomers() {
    this._customerService
      .getCustomers()
      .pipe(
        take(1),
        tap((val) => {
          this.customerList = val;
          console.log('Clienti caricati:', val);
        })
      ).subscribe();
  }

  loadProducts() {
    this._productService
      .getProducts()
      .pipe(
        take(1),
        tap((val) => {
          this.productList = val;
          console.log('Prodotti caricati:', val);
        })
      ).subscribe();
  }

  onProductChange(): void {
    const productId = this.createOrderForm.get('productId')?.value;
    const selectedProduct = this.productList.find((p) => p.id === productId);
    if (selectedProduct) {
      this.maxQuantity = selectedProduct.quantity;
      this.createOrderForm.patchValue({ unitPrice: selectedProduct.price });
      this.createOrderForm.get('quantity')?.setValidators([
        Validators.required,
        Validators.min(1),
        Validators.max(this.maxQuantity),
      ]);
      this.createOrderForm.get('quantity')?.updateValueAndValidity();
      this.calculateTotal();
    } else {
      this.createOrderForm.patchValue({ unitPrice: 0, quantity: null, total: 0 });
      this.maxQuantity = 0;
    }
  }

  calculateTotal(): void {
    const quantity = this.createOrderForm.get('quantity')?.value || 0;
    const unitPrice = this.createOrderForm.get('unitPrice')?.value || 0;
    const total = quantity * unitPrice;
    this.createOrderForm.patchValue({ total });
  }

  onSubmit(): void {
    if (this.createOrderForm.invalid) {
      this.createOrderForm.markAllAsTouched();
      return;
    }

    const orderData: Omit<IOrder, 'id'> = {
      description: this.createOrderForm.get('description')?.value,
      productId: this.createOrderForm.get('productId')?.value,
      customerId: this.createOrderForm.get('customerId')?.value,
      total: this.createOrderForm.get('total')?.value,
    };

    this._orderService.createOrder(orderData).subscribe({
      next: () => {
        alert('Ordine creato con successo!');
        this._rt.navigate(['/show-orders']);
      }
    });
  }

  goToDashboard() {
    this._rt.navigate(['/dashboard']);
  }
}
