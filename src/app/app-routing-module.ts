import { RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NoPageFoundComponent} from "./pages/no-page-found/no-page-found.component";
import {AuthRoutingModule} from "./auth/auth-routing.module";
import {PagesRoutingModule} from "./pages/pages-routing.module";



const routes : Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NoPageFoundComponent },
]



@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
