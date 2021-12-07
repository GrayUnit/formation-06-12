import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-a',
  templateUrl: './template-a.component.html',
  styleUrls: ['./template-a.component.scss']
})
export class TemplateAComponent implements OnInit {

  @Input() public title: string = "";
  @Input() public subtitle: string = "Toto";
  constructor() { }

  ngOnInit(): void {
  }

}
