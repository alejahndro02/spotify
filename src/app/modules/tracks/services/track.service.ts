import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  //hace referencia a la api delcarada en el archivo envronment
  private readonly URL = environment.api;

 constructor(private httpCliente:HttpClient) {}
  getAllTracks$():Observable<any>{
    return this.httpCliente.get(`${URL}/tracks`);
  }
}
