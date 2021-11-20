import { TrackModel } from '@core/models/tracks.model';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '@modules/history/services/search.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  ListResults: TrackModel[] = [];

  constructor(private searchTrack:SearchService) { }

  ngOnInit(): void {
  }
  receiveData(event:string){
    console.log('estoy en el componente padre');
    this.searchTrack.searchTracks$(event)
    .subscribe(data =>{
      this.ListResults = data;
    })
  }
}
