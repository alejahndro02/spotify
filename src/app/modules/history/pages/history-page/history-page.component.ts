import { TrackModel } from '@core/models/tracks.model';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  ListResults$: Observable<any> = of([]);


  constructor(private searchTrack:SearchService) { }

  ngOnInit(): void {
  }
  receiveData(event:string){
    this.ListResults$ = this.searchTrack.searchTracks$(event);
  }
}
