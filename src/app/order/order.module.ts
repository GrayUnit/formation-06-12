import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { OrderRoutingModule } from './order-routing.module';
import { PageListOrderComponent } from './pages/page-list-order/page-list-order.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class OrderModule { }
