import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg:string |boolean = false
  @HostListener('error')
  handleError():void{
    const imgBroken = '../../../assets/images/404.jpg';//Esta imagen se muestra en caso de que llegue a fallar la imagen de error principal
    const elNative = this.elHost.nativeElement
    console.log('esta imagen revento', this.elHost);
    // elNative.src = '../../../assets/images/404.jpg';
    if (this.customImg){
      elNative.src = this.customImg
    }else{
      elNative.src = imgBroken
    }

  }
  constructor(private elHost: ElementRef) {

    
   }

}


