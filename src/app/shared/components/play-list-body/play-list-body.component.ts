import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '@data/tracks.json'
@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  // tracks:Array<TrackModel> = [] ;//Esto es lo equivalente a escribir el comando de abajo 
  tracks:TrackModel [] = []

  constructor() { }

  ngOnInit(): void {
    const {data} : any = (dataRaw as any).default
    this.tracks = data;
  }

}
