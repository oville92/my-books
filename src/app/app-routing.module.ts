import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {RestapiComponent} from "./restapi/restapi.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
	{path : '', component: HomeComponent},
	{path : 'login', component: LoginComponent},
	{path : 'register', component: RegisterComponent},
	{path : 'restapi', component: RestapiComponent},
	{path : '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
