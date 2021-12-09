import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateClient } from '../../enums/state-client';
import { Client } from '../../models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  @Input() client: Client = new Client();
  @Output() submitted: EventEmitter<Client> = new EventEmitter();

  public form!: FormGroup;
  public states = Object.values(StateClient);

  constructor(
    private fb: FormBuilder
  ) { 

  }

  ngOnInit(): void {
    console.log(this.client);
    this.form = this.fb.group({
      name: [this.client.name],
      ca: [this.client.ca],
      state: [this.client.state],
      id: [this.client.id]
    })
  }

  public onSubmit() {
    this.submitted.emit(this.form.value);
  }

}
