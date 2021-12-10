import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private pCollection: Subject<Client[]> = new Subject();
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) { 
    this.refreshCollection();
  }

  public refreshCollection() {
    this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
      map((tab) => {
        return tab.map((item) => new Client(item))
      })
    ).subscribe(
      (datas) => {
        this.pCollection.next(datas);
      }
    )
  }

  get collection(): Observable<Client[]> {
    return this.pCollection.asObservable();
  }

  public addItem(item: Client): Observable<Client> {
    return this.http.post<Client>(`${this.urlApi}clients`, item).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public updateItem(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}clients/${item.id}`, item).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }
  
  public deleteItem(item: Client): Observable<Client> {
    return this.http.delete<Client>(`${this.urlApi}clients/${item.id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    )
  }

  public getItemById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.urlApi}clients/${id}`);
  }
}
