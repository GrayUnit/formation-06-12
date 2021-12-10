import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title: string = "Formation Angular Décembre";
  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    // One shot
    this.translate.get('Home.WelcomeTextVar').subscribe(
      (val) => {
        console.log(val);
      }
    )
    
    // En écoute
    this.translate.stream('Home.WelcomeTextVar').subscribe(
      (val) => {
        console.log(val);
      }
    )

    // Plusieurs valeurs
    this.translate.get(['Home.WelcomeText', 'Home.WelcomeTextVar']).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }


}
