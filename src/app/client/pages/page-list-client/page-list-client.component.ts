import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})
export class PageListClientComponent implements OnInit {

  public collectionClient: Client[] = [];
  public headers: string[];
  constructor(private clientService: ClientService) { 
    this.headers = [
      "Name",
      "CA",
      "State"
    ]
  }

  ngOnInit(): void {
    this.clientService.collection.subscribe(
      (datas) => {
        this.collectionClient = datas;
      }
    )
  }

}
