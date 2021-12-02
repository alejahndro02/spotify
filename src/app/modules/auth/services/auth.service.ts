import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';//TODO: Para Poder realizar la prueba es necesario comentar la parte de cookie para evita errores en este ejemplo
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api;
  constructor(
    private http:HttpClient,
    /*private cookie: CookieService*/) { }

  sendCredentials(email:string, password:string): Observable<any>{
    const body={
      email,
      password
    }
    return this.http.post(`${this.URL}/auth/login`, body)
    //TODO Comentar la parte de pipe para realizar la prueba
    // .pipe(
    //   tap((responseOk:any) =>{
    //     const { data,tokenSession } = responseOk;
    //     this.cookie.set('token_servicio', tokenSession, 1, '/');//Se guarda la cookie desde el comonete pero tambien se puede desde el servico 
    //   })
    // );
  }

  //TODO: ejemplo de testing de una funcion sin metodo post
  suma(a: number, b:number ):number {
    return a + b;
  }
}
