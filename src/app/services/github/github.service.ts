import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private _http: HttpClient) {
  }

  getListUser() {
    const endpoint =`${environment.listUser}`
    return this._http.get(endpoint).pipe(
      map((res:any) => res.items),
    )
  }
  getInfoUser(nameLogin:string) {
    const endpoint =`${environment.listInfoUser}${nameLogin}`
    return this._http.get(endpoint).pipe(
      map((res:any) => res),
    )
  }
  getInfollowers(nameLogin:string) {

    const endpoint =`${environment.listInfoUser}${nameLogin}/followers`
    return this._http.get(endpoint).pipe(
      map((res:any) => res),
    )
  }


}
