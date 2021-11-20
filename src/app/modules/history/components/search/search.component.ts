import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() callBackData: EventEmitter<any> = new EventEmitter();
  src: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  searchTracks(palabra:string):void{
    if(palabra.length >=3){
      this.callBackData.emit(palabra);
      console.log('oalabra que buscas', palabra);
    }
  }
}
