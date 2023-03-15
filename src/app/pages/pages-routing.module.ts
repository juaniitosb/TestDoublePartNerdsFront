import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ListUsersComponent} from "./list-users/list-users.component";
import {AuthGuard} from "../guards/auth.guard";

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    //canActivate: [ AuthGuard ],
    children: [
      { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
      { path: 'formlistUsers', component: ListUsersComponent, data: { titulo: 'ListUsers' }},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PagesRoutingModule { }
