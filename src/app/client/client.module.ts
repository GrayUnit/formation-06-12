import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PageListClientComponent } from './pages/page-list-client/page-list-client.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
