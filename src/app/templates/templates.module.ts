import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateAComponent } from './components/template-a/template-a.component';
import { TemplateBComponent } from './components/template-b/template-b.component';



@NgModule({
  declarations: [
    TemplateAComponent,
    TemplateBComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateAComponent
  ]
})
export class TemplatesModule { }
