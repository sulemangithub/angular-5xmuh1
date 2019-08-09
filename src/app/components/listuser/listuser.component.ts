import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../../services/userservice.service';
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  constructor(private service: UserserviceService) { 
    this.getUsers();
  }

  ngOnInit() {
  }

  users:Array<{}> = [];

  getUsers()
  {
    console.log("in users");
    this.service.getUsers()
    .then(response=>{
     this.users = response.data;     
    })
    .catch(error=>{
      console.log(error);
    });
  }


}