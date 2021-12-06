import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';
import { OrderModule } from './order/order.module';
import { PageListOrderComponent } from './order/pages/page-list-order/page-list-order.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: PageLoginComponent },
  //{ path: 'order', component: PageListOrderComponent }
  {
    path: 'orders',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
