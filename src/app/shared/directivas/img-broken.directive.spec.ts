import { ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';

describe('ImgBrokenDirective', () => {
  it('should create an instance', () => {
    //Se creo la constante asignandole un new ElementRef()
    const elHost = new ElementRef('');
    //Requiere como valor un argumento de tipo elementRef
    const directive = new ImgBrokenDirective(elHost);
    expect(directive).toBeTruthy();
  });
});
