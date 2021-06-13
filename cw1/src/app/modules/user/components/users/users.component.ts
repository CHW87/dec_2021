import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {DataTransferService} from "../../../../app-services/data-transfer.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any[];

  constructor(private userService:UserService,private dataTransfer:DataTransferService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => this.users = response)
  }

}
