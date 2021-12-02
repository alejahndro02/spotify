import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import * as dataTest from '@data/testDataUser.json'//TODO: se importo la data creada para realizar las prubas al auth.service

import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let dataUsersTest:any = ( dataTest as any ).default;
  let httpClientSpy: { post: jasmine.Spy }
  // let cookie: CookieService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    // service = TestBed.inject(AuthService);
    // Se crea un nuevo instanciamiento y se le pasa como argumento la variable httpClientSpy

    service = new AuthService( httpClientSpy as any)

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //TODO Se declara la prueba para el envio de credenciales al backend
  it ('retorna un objeto con data y tokenSesion 📌📌📌📌',(done: DoneFn)=>{
    
    //TODO:ARRange
    const userDataTest:any = dataUsersTest.userOk
    const dataTestResponse = {
      data:{},
      tokenSession:'0x0x0x0'
    }

    httpClientSpy.post.and.returnValue(//Este apartado simula lo que la api va a regresar en su repuesta 
      of(dataTestResponse)
    );

    //TODO: ACT
    service.sendCredentials( userDataTest.email, userDataTest.password)
    .subscribe(responseApiTest => {
      console.log('📌📌📌📌',responseApiTest);
      const getPropertiesDataTest = Object.keys(responseApiTest);
      expect(getPropertiesDataTest).toContain('data');
      expect(getPropertiesDataTest).toContain('tokenSession');
      // expect().toContain()
      done();
    })
  })

  //TODO:PRueba para verificar la fucnion prueba 
  it('verificacion de la suma de dos numeros 3 + 5 = 8 📌📌📌📌📌📌📌📌',()=>{
    const a = 3;
    const b = 5;
    const sumaTotal = service.suma(a,b);
    expect(sumaTotal).toEqual(8);
  })
});
