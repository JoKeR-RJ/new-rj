import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/components/dashboard/dashboard.component';
import { ShowProductsComponent } from './features/components/show-products/show-products.component';
import { AddEditProductComponent } from './features/components/add-edit-product/add-edit-product.component';
import { ShowOrdersComponent } from './features/components/show-orders/show-orders.component';
import { AddOrderComponent } from './features/components/add-order/add-order.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'show-products',component:ShowProductsComponent},
  {path:'add-edit-product',component:AddEditProductComponent},
    {path:'add-edit-product/:id',component:AddEditProductComponent},

  {path:'show-orders',component:ShowOrdersComponent},
  {path:'add-order',component:AddOrderComponent},
  {path:'**',redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
