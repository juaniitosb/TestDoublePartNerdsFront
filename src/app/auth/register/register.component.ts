import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

  public loginForm = this.fb.group({
    name: ['', [Validators.required]],
    identification: ['', [Validators.required]],
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    user: ['', Validators.required],
    password: ['', Validators.required],

  });
  public dropFormRegister = '';
  public submitForm=false;

  constructor(private fb: FormBuilder,) {
  }

  ngOnInit(): void {
  }

  selectValue() {
    let select: any = document.getElementById("selectRegister")||'';
    let options = document.getElementsByTagName("option")||'';
    this.dropFormRegister = options[select.value - 1]?.innerHTML||'CC'
  }

  register() {
    this.submitForm=true
    this.selectValue()

  }
}
