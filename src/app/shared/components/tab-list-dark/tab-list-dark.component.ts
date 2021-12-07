import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab-list-dark',
  templateUrl: './tab-list-dark.component.html',
  styleUrls: ['./tab-list-dark.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabListDarkComponent implements OnInit {
  @Input() headers: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
