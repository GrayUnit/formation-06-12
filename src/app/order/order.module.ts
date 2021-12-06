import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { PageListOrderComponent } from './pages/page-list-order/page-list-order.component';


@NgModule({
  declarations: [
    PageListOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
