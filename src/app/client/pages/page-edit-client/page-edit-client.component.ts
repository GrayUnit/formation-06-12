import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {

  public client$!: Observable<Client>
  constructor(
    private currentRoute: ActivatedRoute,
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.client$ = this.currentRoute.paramMap.pipe(
      switchMap((params) => {
        return this.clientService.getItemById(parseInt(params.get('id')!))
      })
    )
  }

  public edit(item: Client) {
    this.clientService.updateItem(item).subscribe(
      () => {
        this.router.navigate(['clients']);
      }
    )
  }

}
