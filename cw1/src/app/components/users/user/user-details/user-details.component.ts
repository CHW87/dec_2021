import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../../../interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  fullUser : IUser;

  constructor(private router: Router,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params=>{
      this.fullUser = this.router.getCurrentNavigation()?.extras.state as IUser;
    })
    // console.log(history.state);
  }

  ngOnInit(): void {
  }

}