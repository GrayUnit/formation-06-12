import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './components/ui/ui.component';
import { TestComponent } from './components/test/test.component';
import { CoreModule } from '../core/core.module';
import { IconsModule } from '../icons/icons.module';


@NgModule({
  declarations: [
    UiComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    IconsModule
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
