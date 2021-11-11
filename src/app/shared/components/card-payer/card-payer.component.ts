import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-payer',
  templateUrl: './card-payer.component.html',
  styleUrls: ['./card-payer.component.css']
})
export class CardPayerComponent implements OnInit {
@Input() mode:'small' | 'big' = 'small';
@Input() track:TrackModel ={_id:0,name:'',album:'',cover:'', url:''};
  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
  }
  sendPlayer(track:TrackModel):void{
    this.multimediaService.callbackMediaPlayer.emit(track);
  }
}
