import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CustomInterceptorService} from "./custom-interceptor.service";


@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
   ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:CustomInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
