import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TabListComponent } from './components/tab-list/tab-list.component';
import { ListDisplayComponent } from './components/list-display/list-display.component';


@NgModule({
  declarations: [
    TabListComponent,
    ListDisplayComponent
  ],
  imports: [
    CommonModule,
    TemplatesModule
  ],
  exports: [TemplatesModule, TabListComponent]
})
export class SharedModule { }
