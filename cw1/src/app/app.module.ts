import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PostComponent} from './components/posts/post/post.component';
import {PostsComponent} from './components/posts/posts.component';
import {CommentComponent} from './components/comments/comment/comment.component';
import {CommentsComponent} from './components/comments/comments.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/users/user/user.component';
import {UserDetailsComponent} from './components/users/user/user-details/user-details.component';
import {PostDetailsComponent} from './components/posts/post/post-details/post-details.component';
import {UsersDeactivatorService} from "./services";
import {PostsActivatorService} from "./services/posts-activator.service";
import {CommentsResolveService} from "./services/comments-resolve.service";

let routes: Routes = [
  {
    //*render into app*//
    path: 'users',
    component: UsersComponent,
    canDeactivate: [UsersDeactivatorService],
    children: [
      /*users/:id*/
      /*render router-outlet UsersComponent*/
      {path: ':id', component: UserDetailsComponent}
    ]
  },
  {
    /*render into app*/
    path: 'posts', component: PostsComponent, canActivate: [PostsActivatorService]
  },
  {
    /*render into app*/
    path: 'posts/:id', component: PostDetailsComponent
  },
  {path: 'comments', component: CommentsComponent, resolve :{xxx: CommentsResolveService}}
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    CommentComponent,
    CommentsComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
