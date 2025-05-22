import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../shared/interfaces/product.interface';
import { take, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'cem-add-edit-product',
  standalone: false,
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.scss'
})
export class AddEditProductComponent implements OnInit {

  productForm: FormGroup;
  isEdit: boolean = false;
  confirm:string='conferma'
  goToShow='vai a Mostra prodotti'
  
  private _fb = inject(FormBuilder);
  private _productService = inject(ProductService);
  private _route = inject(ActivatedRoute);
  private _rt = inject(Router);
  

  constructor() {     
    this.initializeForm();
  }

  initializeForm() {
    this.productForm = this._fb.group({
      name: this._fb.control<string>('', [Validators.required, Validators.maxLength(20)]),
      description: this._fb.control<string>('', [Validators.required, Validators.maxLength(100)]),
      quantity: this._fb.control(1, [Validators.required, Validators.min(1)]),
      price: this._fb.control(0, [Validators.required, Validators.min(1)]),
    });
  }

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      //chiamata al serv per prendere i dati del prodotto con quel id
      this._productService.getProductById(+id).subscribe({
        //se la chiamata va bene riempio il form con i 
        //dati del prodotto usando patchValue spegnendo i campi
        next: (product: IProduct) => {
          this.productForm.patchValue(product);
          this.productForm.get('name')?.disable();
          this.productForm.get('description')?.disable();
        },
        error: (err: HttpErrorResponse) => console.error('error ngOnInit() in show-products',err),
      });
    }
  }

  onSubmit() {
    if (this.productForm.invalid) return;

    const productData = this.productForm.getRawValue();
    const id = this._route.snapshot.params['id'];

    if (this.isEdit) {
      this._productService.updateProduct(+id, productData).subscribe({
        next: () => this._rt.navigate(['/show-products']),
      });
    } else {
      this._productService.addProduct(productData).subscribe({
        next: () => this._rt.navigate(['/show-products']),
      });
    }
  }

  navigateToShow(){
  this._rt.navigate(['/show-products']);
}

}

/*

onSubmit() {
  if (this.productForm.invalid) return;

  const productData = this.productForm.getRawValue();
  const id = this._route.snapshot.params['id'];

 let request$;

  if (this.isEdit) {
    request$ = this._productService.updateProduct(+id, productData);
  } else {
    request$ = this._productService.addProduct(productData);
  }

  request$.pipe(
    tap(() => this._rt.navigate(['/show-products']))
  ).subscribe();
}



----------------------------------------------------

const request$ = this.isEdit 
  ? this._productService.updateProduct(+id, productData) 
  : this._productService.addProduct(productData);
-------------------------------------------------



*/








