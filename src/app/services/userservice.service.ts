import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserserviceService {

  rooturl:string = "https://reqres.in";

  constructor(private http:HttpClient) { }

  getUsers()
  {
    return this.http.get("https://reqres.in/api/users").toPromise();
  }

  addUser(user)
  {
    return this.http.post("https://reqres.in/api/users",user).toPromise();
  }

}