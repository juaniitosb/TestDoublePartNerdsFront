import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    email: [ localStorage.getItem('email') || null , [ Validators.required, Validators.email ] ],
    password: ['', Validators.required ],
    remember: [false]
  });
  public emailRecover: any;
  public submitForm: boolean=false;


  constructor( private fb: FormBuilder,
               private router:Router) { }

  ngOnInit(): void {
  }

  async login() {
    this.submitForm=true
    if (this.loginForm.valid){
      //await localStorage.setItem('token','ok')
      this.router.navigateByUrl('/dashboard/formlistUsers');
    }else {
      console.log('errorForm')
      console.log(this.loginForm.controls)
    }

  }

  resetPassword() {

  }
}
