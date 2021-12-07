import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private pCollection: Observable<Order[]>;
  private urlApi = environment.urlApi;


  constructor(private http: HttpClient) { 
    this.pCollection = this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
      map((datas) => {
        return datas.map((item) => new Order(item));
      })
    );
    // this.pCollection.subscribe(
    //   (datas) => {
    //     console.log(datas);
    //   }
    // )
  }

  get collection(): Observable<Order[]> {
    return this.pCollection;
  }


}
