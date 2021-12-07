import { Component, OnInit } from '@angular/core';
import { StateOrder } from '../../enums/state-order';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-page-list-order',
  templateUrl: './page-list-order.component.html',
  styleUrls: ['./page-list-order.component.scss']
})
export class PageListOrderComponent implements OnInit {

  public collectionOrder!: Order[];
  public title: string = "Liste order";
  public headers: string[];
  public states = Object.values(StateOrder);

  constructor(private orderService: OrderService) {
    this.headers = [
      "Type",
      "Client",
      "Nb Jours",
      "Tjmht",
      "Total Ht",
      "Total Ttc",
      "State",
      "Comment"
    ];
  }

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

}
