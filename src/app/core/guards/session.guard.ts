import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  //Se Implemeta un constructor para poder guardar el token dentro del cookieService
  constructor(
    private cookie:CookieService,
    private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();//Se ejecuta la fucncion de checkCookieSession
  }

  //Se crea una funcion paa revisar las cookies que hay en el navegador 
  checkCookieSession():boolean{
    try {
      // return this.cookie.check('token');//retorna un booleano que de pednera si hay un tokenSession con el nombre de "token"
      const token:boolean = this.cookie.check('tokenComponent');

      if(!token){
        this.router.navigate(['/','auth']);
        return false
      }
      return token;
    } catch (error) {
      console.log('Upsss Algo anda mal',this.cookie);
      return !true;
    }
  }
}
