import { Component, OnInit } from '@angular/core';
import {DataTransferService} from "../../../../app-services/data-transfer.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments:any[];

  chosenComment:any;

  constructor(private httpClient:HttpClient,
    private dataTransfer: DataTransferService) {
    console.log(this.dataTransfer.getState());
  }

  ngOnInit(): void {
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe((response) => this.comments = response)
  }

  xxx(z: any) {
    this.chosenComment = z;
  }
}
