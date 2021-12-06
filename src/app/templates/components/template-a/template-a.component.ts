import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-a',
  templateUrl: './template-a.component.html',
  styleUrls: ['./template-a.component.scss']
})
export class TemplateAComponent implements OnInit {

  public title = "Titre";
  public subtitle = "SousTitre"
  constructor() { }

  ngOnInit(): void {
  }

}
