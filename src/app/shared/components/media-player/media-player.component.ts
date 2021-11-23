import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') progressBar : ElementRef = new ElementRef('');
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
  handlePosition(event:MouseEvent):void{
    const elNative: HTMLElement = this.progressBar.nativeElement;
    const {clientX} = event;
    const {x, width} = elNative.getBoundingClientRect();
    const clickX = clientX - x;
    const percentageProgressBarClick = (clickX * 100) / width
    this.multimediaService.seekAudio(percentageProgressBarClick);
  }
}
