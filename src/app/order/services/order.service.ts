import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StateOrder } from '../enums/state-order';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private pCollection: Subject<Order[]> = new Subject();
  private urlApi = environment.urlApi;
  private refresh$: Subject<boolean> = new Subject();


  constructor(private http: HttpClient) {
    this.refresh$.subscribe(
      (refreshing) => {
        console.log(refreshing);
        if(refreshing === true) {
          this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
            map((datas) => {
              return datas.map((item) => new Order(item))
            })
          ).subscribe(
            (datas) => {
              this.pCollection.next(datas);
            }
          )
        }
      }
    )
    this.refresh$.next(true);
    // this.pCollection = this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
    //       map((datas) => {
    //         return datas.map((item) => new Order(item));
    //       }),
    // );



    // this.pCollection.subscribe(
    //   (datas) => {
    //     console.log(datas);
    //   }
    // )
  }

  get collection(): Observable<Order[]> {
    return this.pCollection.asObservable();
  }

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    let obj = new Order({...item});
    obj.state = state;
    return this.updateItem(obj);
  }

  public updateItem(item: Order) {
    return this.http.put<Order>(`${this.urlApi}orders/${item.id}`, item).pipe(
      tap((data) => {
        this.refresh$.next(true);
      })
    );
  }

  public addItem(item: Order) {
    return this.http.post<Order>(`${this.urlApi}orders`, item);
  }

  public getItemById(id: number) {
    return this.http.get<Order>(`${this.urlApi}orders/${id}`);
  }

  public deleteItem(item: Order) {
    return this.http.delete<Order>(`${this.urlApi}orders/${item.id}`).pipe(
      tap((datas) => {
        this.refresh$.next(true);
      }),
    )
  }

}
