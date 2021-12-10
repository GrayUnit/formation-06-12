import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})
export class PageListClientComponent implements OnInit {

  public collectionClient$: Observable<Client[]>;
  public headers: string[];
  constructor(
    private clientService: ClientService,
    private router: Router
  ) { 
    this.headers = [
      "Name",
      "CA",
      "State",
      "Actions"
    ]
    this.collectionClient$ = this.clientService.collection;
    this.clientService.refreshCollection();
  }

  ngOnInit(): void {
  }

  public goToUpdate(item: Client) {
    this.router.navigate(['clients', 'edit', item.id]);
  }

  public deleteItem(item: Client) {
    this.clientService.deleteItem(item).subscribe();
  }
}
