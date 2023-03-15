import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    email: [ '' ,[ Validators.required ] ],
    password: ['', Validators.required ],
    remember: [false]
  });
  public emailRecover: any;
  public submitForm: boolean=false;
  public submitFormFalse: boolean=false;


  constructor( private fb: FormBuilder,
               private router:Router,
               private userServices:UserService) { }

  ngOnInit(): void {
  }

  async login() {
    this.submitForm=true
    this.submitFormFalse=false
    if (this.loginForm.valid){
      let payload ={
        idUser:"1",
        nameUser:this.loginForm.controls.email.value || '',
        passUser:this.loginForm.controls.password.value || ''
      }
      this.userServices.login(payload).subscribe(res=>{
        if (res.nameUser !== null){
          this.loginForm.reset()
          this.submitForm = false
          this.router.navigateByUrl('/dashboard/formlistUsers');
        }else{
          this.submitFormFalse = true
        }
      })
      //await localStorage.setItem('token','ok')
    }else {
      console.log('errorForm')
      this.submitFormFalse = true    }

  }

  resetPassword() {

  }
}
