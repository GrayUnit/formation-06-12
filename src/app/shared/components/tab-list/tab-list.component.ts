import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabListComponent implements OnInit {

  @Input() headers: string[] = [];
//  @Input() items: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
