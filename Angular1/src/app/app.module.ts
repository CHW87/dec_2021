import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './user/user.component';
// import { PostComponent } from './post/post.component';
// import { PostsComponent } from './posts/posts.component';
// import { CommentsComponent } from './comments/comments.component';
// import { CommentComponent } from './comment/comment.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostComponent,
    PostsComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
