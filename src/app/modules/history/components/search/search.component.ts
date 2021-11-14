import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
src: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  searchTracks(palabra:string):void{
    if(palabra.length >=3){
      console.log('oalabra que buscas', palabra);
    }
    
  }
}
