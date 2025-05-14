import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { DashboardComponent } from './features/components/dashboard/dashboard.component';
import { ShowProductsComponent } from './features/components/show-products/show-products.component';
import { AddEditProductComponent } from './features/components/add-edit-product/add-edit-product.component';
import { ShowOrdersComponent } from './features/components/show-orders/show-orders.component';
import { AddOrderComponent } from './features/components/add-order/add-order.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './features/components/error-page/error-page.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ShowProductsComponent,
    AddEditProductComponent,
    ShowOrdersComponent,
    AddOrderComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
