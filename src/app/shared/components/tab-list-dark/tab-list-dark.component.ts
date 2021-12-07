import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-list-dark',
  templateUrl: './tab-list-dark.component.html',
  styleUrls: ['./tab-list-dark.component.scss']
})
export class TabListDarkComponent implements OnInit {
  @Input() headers: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
