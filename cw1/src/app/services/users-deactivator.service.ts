import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersDeactivatorService implements CanDeactivate<any>{

  constructor() { }
  canDeactivate():boolean {
    return confirm('leave from users page?')
  }
}
