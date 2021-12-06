import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PageListClientComponent } from './pages/page-list-client/page-list-client.component';


@NgModule({
  declarations: [
    PageListClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
