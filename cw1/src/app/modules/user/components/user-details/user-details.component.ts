import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails:any;

  constructor(//private userService:UserService,//
              private activatedRoute:ActivatedRoute) {

    this.activatedRoute.data.subscribe((data)=> this.userDetails= data.user)

    // this.activatedRoute.params.subscribe((params) => {
    //   let id = params.id;
    //   console.log(id)
    //   this.userService.getUser(id).subscribe((user) => this.userDetails = user)
    // })
  }

  ngOnInit(): void {
  }

}
