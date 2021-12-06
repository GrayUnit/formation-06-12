import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListClientComponent } from './pages/page-list-client/page-list-client.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-client', pathMatch: 'full' },
  { path: 'list-client', component: PageListClientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
