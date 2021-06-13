import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpclient: HttpClient) { }

getUsers(): Observable <any[]> {
return this.httpclient.get<any[]>(this.url);
}

getUser(id:string):Observable<any>{
    return this.httpclient.get(this.url + '/' + id )
}
}

