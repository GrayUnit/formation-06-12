import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-page-list-order',
  templateUrl: './page-list-order.component.html',
  styleUrls: ['./page-list-order.component.scss']
})
export class PageListOrderComponent implements OnInit {

  public collectionOrder: Order[] = [];
  public title: string = "Liste order"
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.collection.subscribe(
      (datas) => {
        this.collectionOrder = datas;
        console.log(this.collectionOrder);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
