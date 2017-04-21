import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyActivateGuard implements CanActivate {
 constructor( private router:Router) {}
  canActivate(
   route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //  console.log(route);
      console.log(route.params['id'])
      if(route.params['id']<0||route.params['id']>4){
        this.router.navigate(['error']);
         return true;
      }
     else{ return true; }
   
  }
}
