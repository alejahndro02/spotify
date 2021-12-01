import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageComponent } from './auth-page.component';
import { By } from '@angular/platform-browser';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ AuthPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //TODO: es el primer enunciado que debe asegurar lo siguiente
  //TODO: Debe de aaegurarse que formulario sea invalido cuadno regrese datos errones 
  //patron AAA (Arrange,act,assert)

  it('Debe de retornar invalido el formulario', () => {
          //Arrange
  const mockCredetials = {
    //Se asignas valores erroneos
    email:'correo@correo.com',
    password:'1234567898012'
  }
  const emailForm:any = component.formLogin.get('email');
  const passwordForm:any = component.formLogin.get('password');
  //act
  emailForm.setValue(mockCredetials.email);
  passwordForm.setValue(mockCredetials.password);
  //assert

  //expect (component).toBeTruthy();//original
  expect (component.formLogin.invalid).toEqual(true);//Modificado
  });
  //segunda prueba
  it('Debe de retornar valido el formulario', () => {
    //Arrange
const mockCredetials = {
//Se asignas valores erroneos
email:'test@test.com',
password:'12345678'
}
const emailForm:any = component.formLogin.get('email');
const passwordForm:any = component.formLogin.get('password');
//act
emailForm.setValue(mockCredetials.email);
passwordForm.setValue(mockCredetials.password);
//assert

//expect (component).toBeTruthy();//original
expect (component.formLogin.invalid).toEqual(false);//Modificado
  });
  //tercer prueba
  it('El boton bederia tener la palabara "iniciar sesion"', ()=>{
    const ElementRef = fixture.debugElement.query(By.css('.form-action button'))
    const getInnerText = ElementRef.nativeElement.innerText
    expect (getInnerText).toEqual('Iniciar sesión')
  })
});
