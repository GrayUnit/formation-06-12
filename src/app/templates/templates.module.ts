import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateAComponent } from './components/template-a/template-a.component';
import { TemplateBComponent } from './components/template-b/template-b.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TemplateAComponent,
    TemplateBComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateAComponent,
    TemplateBComponent
  ]
})
export class TemplatesModule { }
