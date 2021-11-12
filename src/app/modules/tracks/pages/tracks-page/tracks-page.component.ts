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
  listObserverTrack$:Array<Subscription> = [];

  constructor(private trackService:TrackService) { }

  ngOnInit(): void {
    console.log();
    const ObserverTrackTrending$ = this.trackService.dataTracksTrendind$
    .subscribe(response=>{
      this.tracksTrending = response;
      this.tracksRandom = response;
      console.log('canciones trending', response);
    })
    const ObserverTrackRandom$ = this.trackService.dataTracksRandom$
    .subscribe(response => {
      this.tracksRandom = [...this.tracksRandom, ...response]
      console.log('canciones Random', response);
    })
    this.listObserverTrack$=[ObserverTrackTrending$, ObserverTrackRandom$ ];
  }
ngOnDestroy():void{
  this.listObserverTrack$.forEach(u => u.unsubscribe());
}
}
