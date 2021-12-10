import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit, OnDestroy {

  public item$!: Observable<Order>;
  // public item!: Order;
  public id!: number;
  public subscription!: Subscription;
  @ViewChild('updateOrderModal') updateModalRef!: TemplateRef<any>;
  private modalValues!: Order;
  private currentActiveModal!: NgbModalRef;

  constructor(
    private orderService: OrderService,
    private currentRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.router.getCurrentNavigation()?.extras.state?.data;
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }

  ngOnInit(): void {
    // this.subscription = this.currentRoute.paramMap.subscribe(
    //   (params) => {
    //     this.id = parseInt(params.get("id")!);
    //     this.orderService.getItemById(this.id).subscribe(
    //       (data) => {
    //         console.log(data);
    //       }
    //     )
    //   }
    // )


    // console.log(this.currentRoute.snapshot.queryParamMap.get("data"));

    this.item$ = this.currentRoute.paramMap.pipe(
      switchMap((params) => {
        // this.orderService.addItem(item).subscribe()
        return this.orderService.getItemById(parseInt(params.get("id")!))
      })
    )
    // this.item$.subscribe(
    //   (data) => {
    //     this.item = data;
    //   }
    // )
    // .subscribe(
    //   (data) => {
    //     console.log(data);
    //   }
    // )
  }

  public edit(item?: Order) {
    if(item==undefined) {
      item = this.modalValues;
    }
    this.orderService.updateItem(item).subscribe(
      () => {
        this.dismiss();
        this.router.navigate(['orders']);
      }
    )
  }

  public openUpdateModal(values: Order) {
    this.modalValues = values;
    this.currentActiveModal = this.modalService.open(this.updateModalRef);
  }


  public dismiss() {
    this.currentActiveModal.dismiss();
  }

  ngOnDestroy(): void {
   // this.subscription.unsubscribe();
  }

}
