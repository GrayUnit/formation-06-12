import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private pCollection: Observable<Client[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) { 
    this.pCollection = this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
      map((tab) => {
        return tab.map((item) => new Client(item))
      })
    );
  }

  get collection(): Observable<Client[]> {
    return this.pCollection;
  }
}
