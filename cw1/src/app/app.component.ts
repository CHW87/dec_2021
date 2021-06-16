import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {


  constructor(private httpClient: HttpClient) {

    // this.httpClient.get('https://api.yelp.com/v3/businesses/search?location=NYC',
    //   {
    //     headers: new HttpHeaders(
    //       {'Authorization': 'Bearer zs1c9sr7C6QjMzMs_S2yRnddQwl9G_T-88k-doOCkIQ0nJPnPIExUuvetUdr3AMUxkKlqsvNvPd5gG7rwsGY2AvuRVDfsDSsj57rwhKDBS8BoaGdSAhGr3dMWWXIYHYx'}
    //     )
    //   })
    this.httpClient.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(value=>console.log(value))
  }
}
