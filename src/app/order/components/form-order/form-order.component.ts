import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from '../../enums/state-order';
import { Order } from '../../models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {

  @Input() item: Order = new Order();
  @Output() clicked: EventEmitter<Order> = new EventEmitter();

  public form: FormGroup;
  public states = Object.values(StateOrder);

  constructor(
    private fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      tjmHt: [this.item.tjmHt],
      nbJours: [this.item.nbJours],
      tva: [this.item.tva],
      state: [this.item.state],
      typePresta: [this.item.typePresta],
      client: [this.item.client],
      comment: [this.item.comment],
      id: [this.item.id]
    })
  }

  ngOnInit(): void {
  }

  public onSubmit() {
    this.clicked.emit(this.form.value);
  }

}
