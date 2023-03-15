import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {RegisterFormDTO} from "../../model/dto/register-form.DTO";
import {UserService} from "../../services/user/user.service";
import {LoginFormDTO} from "../../model/dto/login-form.DTO";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm = this.fb.group({
    namePerson: ['', [Validators.required]],
    lastNamePerson: ['', [Validators.required]],
    identification: ['', [Validators.required]],
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    user: ['', Validators.required],
    password: ['', Validators.required],

  });
  public dropFormRegister = '';
  public submitForm = false;
  public submitFormTrue: boolean=false;

  constructor(private fb: FormBuilder,
              private userServices: UserService) {
  }

  ngOnInit(): void {
  }

  selectValue() {
    let select: any = document.getElementById("selectRegister") || '';
    let options = document.getElementsByTagName("option") || '';
    this.dropFormRegister = options[select.value - 1]?.innerHTML || 'CC'
  }

  register() {
    this.submitForm = true
    this.selectValue()
    if (this.registerForm.valid) {
      let date = new Date();
      let name = this.registerForm.controls.namePerson.value
      let lastName = this.registerForm.controls.lastNamePerson.value
      let payload = new RegisterFormDTO();

      payload.idPerson = this.registerForm.controls.identification.value || '';
      payload.namePerson = name || '';
      payload.lastNamePerson = lastName || '';
      payload.identPerson = this.registerForm.controls.identification.value || '';
      payload.mailPerson = this.registerForm.controls.email.value || '';
      payload.typeIdentification = this.dropFormRegister || '';
      payload.creationDate = '2023-02-15';
      payload.showIdentification = `${this.dropFormRegister}${this.registerForm.controls.identification.value}` || '';
      payload.showName = `${name} ${lastName}` || '';
      this.userServices.personRegister(payload).subscribe(res => {
        if (res.statusCode == 200) {
          let payloadUser = new LoginFormDTO()
          payloadUser.idUser = 123
          payloadUser.nameUser = this.registerForm.controls.user.value || ''
          payloadUser.passUser = this.registerForm.controls.password.value || ''
          this.userServices.userRegister(payloadUser).subscribe(res => {
            this.registerForm.reset()
            this.submitForm = false
            this.submitFormTrue = true
          })
        } else {

        }
      })

    } else {
      console.log('form-invalid')
    }


  }
}
