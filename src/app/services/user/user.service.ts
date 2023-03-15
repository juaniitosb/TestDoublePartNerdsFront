import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs";
import {LoginFormDTO} from "../../model/dto/login-form.DTO";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) {
  }

  login(payload: any) {
    const endpoint = `${environment.login}`
    return this._http.post(endpoint, payload).pipe(
      map((res: any) => res),
    )
  }

  userRegister(payload:any) {
    const endpoint = `${environment.userRegister}`
    return this._http.post(endpoint, payload).pipe(
      map((res: any) => res),
    )
  }

  personRegister(payload: any) {
    const endpoint = `${environment.personRegister}`
    return this._http.post(endpoint, payload).pipe(
      map((res: any) => res),
    )
  }

}

