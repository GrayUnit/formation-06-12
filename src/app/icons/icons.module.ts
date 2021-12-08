import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconMenuComponent } from './components/icon-menu/icon-menu.component';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';



@NgModule({
  declarations: [
    IconMenuComponent,
    IconCloseComponent,
    IconEditComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconMenuComponent,
    IconCloseComponent,
    IconEditComponent
  ]
})
export class IconsModule { }
