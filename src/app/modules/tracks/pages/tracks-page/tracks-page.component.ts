import { TrackService } from './../../services/track.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';
//Se asigna todo el valor de la data a la variable data 

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending:TrackModel[] = [];
  tracksRandom:TrackModel[] = [];
  listObservers:Array<Subscription> = [];

  constructor(private trackService:TrackService) { };

  ngOnInit(): void {
    this.trackService.getAllTracks$().subscribe(response =>{
      console.log('=====>', response);
      
    })
  };
  ngOnDestroy():void{};
}
