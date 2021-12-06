import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListOrderComponent } from './pages/page-list-order/page-list-order.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-order', pathMatch: 'full'},
  { path: 'list-order', component: PageListOrderComponent },
  { path: 'add-order' },
  { path: 'edit-order' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
