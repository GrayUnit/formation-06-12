import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TabListComponent } from './components/tab-list/tab-list.component';
import { ListDisplayComponent } from './components/list-display/list-display.component';
import { TabListDarkComponent } from './components/tab-list-dark/tab-list-dark.component';
import { FormatTextPipe } from './pipes/format-text.pipe';
import { StateDirective } from './directives/state.directive';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    TabListComponent,
    ListDisplayComponent,
    TabListDarkComponent,
    FormatTextPipe,
    StateDirective,
    BtnComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    IconsModule
  ],
  exports: [
    TemplatesModule,
    TabListComponent,
    TabListDarkComponent,
    FormatTextPipe,
    StateDirective,
    BtnComponent,
    IconsModule,
    ModalComponent
  ]
})
export class SharedModule { }
