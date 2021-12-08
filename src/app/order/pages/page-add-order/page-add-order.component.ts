import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public add(item: Order) {
    this.orderService.addItem(item).subscribe(
      (response) => {
        this.router.navigate(['orders']);
      }, 
      (err) => {
        alert("Erreur lors de l'ajout");
      }
    );
  }

}
