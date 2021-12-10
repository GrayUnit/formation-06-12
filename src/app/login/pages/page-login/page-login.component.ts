import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  public loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get fields() {
    return this.loginForm.controls;
  }

  public onSubmit() {
    this.authService.login(this.fields.email.value, this.fields.password.value)
    .subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(["orders"]);
      }, (err) => {
        console.log(err);
      }
    )
  }

}
