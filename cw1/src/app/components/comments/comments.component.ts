import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../interfaces";
import {CommentService} from "../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  postId:number;
  comments:IComment[];

  constructor(private commentService: CommentService,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => console.log(value.xxx))
  }

  ngOnInit(): void {
    this.commentService.getByPostId(this.postId).subscribe(value => this.comments = value)
  }

}
