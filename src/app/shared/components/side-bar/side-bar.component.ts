import { TrackService } from './../../../modules/tracks/services/track.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
mainMenu:{
  defaultOptions:Array<any>,
  accessLink:Array<any>,
} = { defaultOptions:[], accessLink:[] };
customOptions:Array<any> = [];

  constructor(private router:Router, private trackService:TrackService) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
    {
      name:'Home',
      icon:'uil uil-estate',
      router:['/'],
      query:{home:'home'}
    },
    {
      name:'Buscar',
      icon:'uil uil-search',
      router:['/', 'history'],
      query:{history:'MiHistorial'}
    },
    {
      name:'Tu Biblioteca',
      icon:'uil uil-chart',
      router:['/', 'favorites'],
      query:{favorites:'MisCanciones'}
    }
    ];
    this.mainMenu.accessLink = [
      {
        name: 'Crear Lista',
        icon: 'uil uil-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil uil-heart-medical'
      }
    ];
    this.customOptions = [
      {
        name:'Mi Lista °1',
        rouer:['/']
      },
      {
        name:'Mi Lista °2',
        rouer:['/']
      },
      {
        name:'Mi Lista °3',
        rouer:['/']
      },
      {
        name:'Mi Lista °4',
        rouer:['/']
      },
      {
        name:'Mi Lista °5',
        rouer:['/']
      },
    ]

    //Esto solo es por cuation delejemplo y demostrar que se pueden importar servicios desde otro punto del proyecto
    this.trackService.dataTracksRandom$.subscribe(response=>{
      console.log('=====>', response);
      this.customOptions.push({
        name:response[0].name,
        router:[]
      })
    })
  }

  //Ese metodo sirve cuando se pasa el metodo atra vez del evento click esta es otra forma de paras los queryParams 
  goTo($event:any):void{
    console.log($event);
    this.router.navigate(['/', 'favorites'],{
      queryParams:{
        key1:'favorites-1',
        key2:'favorites-2',
        key3:'favorites-3'
      }
    })
  }
}
