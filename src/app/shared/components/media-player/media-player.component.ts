import { Component, OnDestroy, OnInit } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
listObserversMedia$:Array<any> = []
state:string= 'paused'
  constructor(public multimediaService: MultimediaService) { }
  ngOnInit(): void {
    const mediaObserver = this.multimediaService.playerStatus$.subscribe(status => this.state = status)
    this.listObserversMedia$ = [mediaObserver]

  }
  ngOnDestroy(): void {
      this.listObserversMedia$.forEach(u => u.unsubscribe())
  }
}
