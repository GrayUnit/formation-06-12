import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild()
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ]
})
export class CoreModule { }
