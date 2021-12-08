import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StateOrder } from '../enums/state-order';
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
      }),
      // catchError((err) => { 
      //   console.log(err);
      //   return HttpErrorResponse(err);
      // })
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

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    let obj = new Order({...item});
    obj.state = state;
    return this.updateItem(obj);
  }

  public updateItem(item: Order) {
    return this.http.put<Order>(`${this.urlApi}orders/${item.id}`, item);
  }

  public addItem(item: Order) {
    return this.http.post<Order>(`${this.urlApi}orders`, item);
  }

  public getItemById(id: number) {
    return this.http.get<Order>(`${this.urlApi}orders/${id}`);
  }

}
