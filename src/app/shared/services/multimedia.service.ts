import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callbackMediaPlayer: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }
}
