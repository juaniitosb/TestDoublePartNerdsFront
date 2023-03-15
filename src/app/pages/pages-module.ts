import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListUsersComponent} from "./list-users/list-users.component";
import {NoPageFoundComponent} from "./no-page-found/no-page-found.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RouterModule} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {FormsModule} from "@angular/forms";
import {AppModule} from "../app.module";
import {HeaderComponent} from "../shared/header/header.component";




@NgModule({
  declarations: [
    HeaderComponent,
    PagesComponent,
    DashboardComponent,
    ListUsersComponent,
    NoPageFoundComponent
  ],
  exports:[
    PagesComponent,
    DashboardComponent,
    ListUsersComponent,
    NoPageFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,


  ]
})
export class PagesModule { }
