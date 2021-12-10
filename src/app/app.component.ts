import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'crm0612';
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
  }

  public check() {
    console.log("CD App");
  }
}
