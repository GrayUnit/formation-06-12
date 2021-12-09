import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageListClientComponent } from './pages/page-list-client/page-list-client.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-client', pathMatch: 'full' },
  { path: 'list-client', component: PageListClientComponent },
  { path: 'add', component: PageAddClientComponent },
  { path: 'edit/:id', component: PageEditClientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
