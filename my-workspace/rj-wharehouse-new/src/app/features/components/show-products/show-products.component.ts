import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../../shared/interfaces/product.interface';
import { ProductService } from '../../../shared/services/product.service';
import { take, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'cem-show-products',
  standalone: false,
  templateUrl: './show-products.component.html',
  styleUrl: './show-products.component.scss'
})
export class ShowProductsComponent implements OnInit{

  tHeadLabels:string[]=['nome','descrizione','quantità','prezzo'];
  products:IProduct[]=[];
  buttonText='vai a inserisci';
  actions='azioni';

  private _productService=inject(ProductService);
  private _rt=inject(Router);

  ngOnInit(): void {
    this.loadProducts();
  }

  navigateAddProduct(){
    this._rt.navigate(['/add-edit-product']);
  }

  loadProducts(){
    this._productService.getProducts().pipe( 
      take(1),
      tap(items => {
        this.products = items;
        console.log('loadProducts()\n',items);
      }) 
    ).subscribe();
  }

  updateProducts(id: number) {
    this._rt.navigate([`/add-edit-product/${id}`]); 
  }

  removeProduct(id: number) {
    this._productService.removeProduct(id).pipe(
      tap((val)=>{
        this.products = this.products.filter(item => item.id !== id);
        console.log('removeProduct()\n',val);
      })
    ).subscribe();

  }

    /*

      removeProduct(id: number) {
    this._productService.removeProduct(id).subscribe({
      next: () => {
        this.products = this.products.filter(item => item.id !== id);
      }
    });
  }
    
    */

  
}
