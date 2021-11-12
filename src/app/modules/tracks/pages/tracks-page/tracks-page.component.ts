import { TrackService } from './../../services/track.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';

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
    this.loadDataAll();
    this.loadDataRandom();
  };
  ngOnDestroy():void{};

  loadDataAll():void{
    this.trackService.getAllTracks$()
    .subscribe((response:TrackModel[]) =>{
      this.tracksTrending = response;
    })
  }
  loadDataRandom():void{
    this.trackService.getAllRandom$().subscribe((response:TrackModel[]) =>{
      this.tracksRandom = response;
    },error=>{})
  }
}
