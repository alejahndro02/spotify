import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
//Se asigna todo el valor de la data a la variable data 
import * as dataRaw from '@data/tracks.json'
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  // mockTracksList:Array<TrackModel> =[]
  mockTracksList:TrackModel[] =[]

  constructor() { }

  ngOnInit(): void {
    const {data} : any = (dataRaw as any).default
    this.mockTracksList = data;
  }

}
