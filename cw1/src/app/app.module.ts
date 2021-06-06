import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app-component/app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';

let routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',loadChildren :()=> import('./modules/user/user.module').then(m =>m.UserModule)}
  // {path:'posts',loadChildren :()=> import('./modules/user/user.module').then(m =>m.PostModule)}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

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
