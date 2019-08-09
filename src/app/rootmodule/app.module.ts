import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {RouterModule} from '@angular/router';

import {WelcomeComponent} from "../components/welcome/welcome.component"; 
import {CreateuserComponent} from "../components/createuser/createuser.component"; 
import {ListuserComponent} from "../components/listuser/listuser.component"; 
import {LogoutComponent} from "../components/logout/logout.component"; 
import {UserserviceService} from '../services/userservice.service';
import { HttpClientModule } from '@angular/common/http';

const routes = [
  {path:"welcome",component:WelcomeComponent},
  {path:"list",component:ListuserComponent},
  {path:"create",component:CreateuserComponent},
  {path:"logout",component:LogoutComponent},
  {path:"",component:WelcomeComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(routes),HttpClientModule],
  declarations: [ AppComponent, HelloComponent,WelcomeComponent,ListuserComponent,CreateuserComponent,LogoutComponent ],
  providers : [UserserviceService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
