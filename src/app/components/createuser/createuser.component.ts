import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../../services/userservice.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private service:UserserviceService) { }

  ngOnInit() {
  }

  message:string = "";

  process(user)
  {
    console.log(user);
    
    this.service.addUser(user)
    .then(response=>{
      if(response.id)
      {
        this.message = "User created successfully!";
      }
    })
    .catch(error=>{
      console.log(error);
       this.message = "Could not add user!";
    });

  }

}