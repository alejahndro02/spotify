import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({})
  msjErrorSesion: Boolean= false
  constructor(
    private authService: AuthService,
    private cookie: CookieService,
    private router: Router
     ) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
        password:new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
      )
  }
  sendLogin():void{
    const {email, password} = this.formLogin.value;
    this.authService.sendCredentials(email, password)
    .subscribe(responseOk =>{
      const { data,tokenSession } = responseOk;
      this.cookie.set('tokenComponent', tokenSession, 1, '/');//Se guarda la cookie desde el comonete pero tambien se puede desde el servico 
      this.router.navigate(['/','tracks'])// Se agrega la redireccion a /tracks en caso de que la contraseña coincida
    },error=>{
      this.msjErrorSesion = true
      console.log('Ocurrio un error con usuario y/o pasword');
    });
  }
}
