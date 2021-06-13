import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentsComponent } from './component/comments/comments.component';
import {HttpClientModule} from "@angular/common/http";
import { CommentComponent } from './component/comment/comment.component';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule,
  ]
})
export class CommentModule { }
