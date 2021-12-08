import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatePhoneNumber } from 'src/app/shared/validators/phone-validator';
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

  public form!: FormGroup;
  public states = Object.values(StateOrder);

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      tjmHt: [this.item.tjmHt, Validators.required],
      nbJours: [this.item.nbJours],
      tva: [this.item.tva],
      state: [this.item.state],
      typePresta: [this.item.typePresta],
      client: [this.item.client, Validators.compose([Validators.required, Validators.minLength(2)])],
      comment: [this.item.comment, Validators.minLength(2)],
      id: [this.item.id]
    })
  }

  public onSubmit() {
    this.clicked.emit(this.form.value);
  }

}
