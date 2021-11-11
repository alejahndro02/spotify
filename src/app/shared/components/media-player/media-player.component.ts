import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
mockCover: TrackModel ={
  cover:'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
  album:'Gioli & Assia',
  name:'Babe(oficial)',
  _id:1,
  url:'http://localhost/track.mp3'
}
  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observerMedia$ = this.multimediaService.callbackMediaPlayer
    .subscribe((response: TrackModel)=>{
      console.log('Recibiendo cancion', response.name);
    })
  }

}
