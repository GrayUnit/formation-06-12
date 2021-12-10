import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { StateOrder } from '../../enums/state-order';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-page-list-order',
  templateUrl: './page-list-order.component.html',
  styleUrls: ['./page-list-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageListOrderComponent implements OnInit {

  public collectionOrder$: Observable<Order[]>;
  //public collectionOrder!: Order[];
  public title: string = "Liste order";
  public headers: string[];
  public states = Object.values(StateOrder);
  public counter: BehaviorSubject<any> = new BehaviorSubject({nombre: 0});

  public incrementCounter() {
    // this.counter.nombre += 1;
    this.counter.next({nombre: this.counter.value.nombre + 1});
  }

  constructor(
    private orderService: OrderService,
    private router: Router
  ) {
    this.collectionOrder$ = this.orderService.collection;
    this.orderService.refreshCollection();
    // this.orderService.collection.subscribe(
    //   (data) => {
    //     console.log(data);
    //   }
    // )
    this.headers = [
      "Type",
      "Client",
      "Nb Jours",
      "Tjmht",
      "Total Ht",
      "Total Ttc",
      "State",
      "Comment",
      "Actions"
    ];
  }

  ngOnInit(): void {
  }

  public changeState(item: Order, event: any) {
    console.log(item);
    console.log(event);
    this.orderService.changeState(item, event.target.value).subscribe(
      (res) => {
        item.state = res.state;
      },
      (error) => {
        event.target.value = item.state;
      }
    )
  }

  public test(event: any) {
    console.log("Appel du bouton");
    console.log(event);
  }

  public goToUpdate(item: Order) {
    this.router.navigate(['orders', 'edit', item.id], {state: {data: item}});
    //this.router.navigate(['orders', 'edit', item.id]);
  }

  public deleteItem(item: Order) {
    this.orderService.deleteItem(item).subscribe();
  }

  
  public check() {
    console.log("CD Order");
  }
}
