import { Component, OnDestroy, OnInit } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
listObserversMedia$:Array<any> = []
  constructor(public multimediaService: MultimediaService) { }
  ngOnInit(): void {}
  ngOnDestroy(): void {
      this.listObserversMedia$.forEach(u => u.unsubscribe())
  }
}
