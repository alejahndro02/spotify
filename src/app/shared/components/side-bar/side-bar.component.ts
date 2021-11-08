import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
    {
      name:'Home',
      icon:'uil uil-estate',
      routes:['/']
    },
    {
      name:'Buscar',
      icon:'uil uil-search',
      routes:['/', 'history']
    },
    {
      name:'Tu Biblioteca',
      icon:'uil uil-chart',
      routes:['/', 'favorites']
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
  }

}
