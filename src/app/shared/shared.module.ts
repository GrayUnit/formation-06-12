import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TabListComponent } from './components/tab-list/tab-list.component';
import { ListDisplayComponent } from './components/list-display/list-display.component';
import { TabListDarkComponent } from './components/tab-list-dark/tab-list-dark.component';


@NgModule({
  declarations: [
    TabListComponent,
    ListDisplayComponent,
    TabListDarkComponent
  ],
  imports: [
    CommonModule,
    TemplatesModule
  ],
  exports: [TemplatesModule, TabListComponent, TabListDarkComponent]
})
export class SharedModule { }
