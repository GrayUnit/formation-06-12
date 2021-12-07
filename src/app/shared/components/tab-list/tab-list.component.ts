import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss']
})
export class TabListComponent implements OnInit {

  @Input() headers: string[] = [];
//  @Input() items: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
