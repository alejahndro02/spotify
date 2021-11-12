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
//Obserbable como promesa
  async loadDataAll():Promise<any>{
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise();
    // this.tracksRandom = await this.trackService.getAllRandom$().toPromise();
  }
  //Observable como subscripcion
  loadDataRandom():void{
    this.trackService.getAllRandom$().subscribe((response:TrackModel[]) =>{
      this.tracksRandom = response;
    },error=>{console.log('Error de conexion')})
  }
}
