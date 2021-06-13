import {Component, Input, OnInit} from '@angular/core';
import {DataTransferService} from "../../../../app-services/data-transfer.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user:any;

  constructor(private dataTransfer: DataTransferService) { }

  ngOnInit(): void {
  }

  storeUser() {

    let currentStore = this.dataTransfer.getState();
    currentStore.push(this.user);
    this.dataTransfer.setState(currentStore);
  }

}
