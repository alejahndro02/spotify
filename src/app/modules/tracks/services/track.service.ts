import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '@data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

 dataTracksTrendind$:Observable<TrackModel[]> =  of([]);
 
 //Otra opcion de crear observables
 dataTracksRandom$:Observable<any> =  of([]);

 constructor() {
    const {data} : any = (dataRaw as any).default;

    this.dataTracksTrendind$ = of(data);
    
    this.dataTracksRandom$ = new Observable(observer =>{
      const trackExample: TrackModel = {
        _id:9,
        name:'leve',
        album:'cartel de santa',
        url: 'http://',
        cover:'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/f/2/8/8/f28893d1d7f27c22764f28b32375960e.jpg'
      }
    
      setTimeout(() => {
        observer.next([trackExample]);
      }, 4000);
    })
}}
