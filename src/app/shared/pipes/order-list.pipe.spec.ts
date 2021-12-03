import { OrderListPipe } from './order-list.pipe';
import * as dataTrack from '@data/tracks.json'
import { TrackModel } from '../../../../../githubLeifer/angular-spotify/src/app/core/models/tracks.model';
describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });
  it('probando entrada y salida de valores',()=>{
    const pipe = new OrderListPipe();
    const {data}:any = (dataTrack as any ).default
    const result: TrackModel[] = pipe.transform(data)
    expect(result).toEqual(data)
  });

  it('Probar si se ordena de manera correcta en forma ascendente',()=>{
    const pipe = new OrderListPipe();
    const {data}:any = (dataTrack as any ).default
    const firstValue= data.find(( i: any ) => i._id ===7) //TODO: cancion 50Centt
    const lastValue= data.find(( i: any ) => i._id ===6) //TODO: cancion TNT
    
    const resulTest :TrackModel[]= pipe.transform(data, 'name', 'asc');
     const firstResult = resulTest[0];
     const lastResult =  resulTest[resulTest.length -1]

    expect(firstResult).toEqual(firstValue);
    expect(lastResult).toEqual(lastValue)

  });
  it('Probar si se ordena de manera correcta en forma descendente',()=>{
    const pipe = new OrderListPipe();
    const {data}:any = (dataTrack as any ).default
    const firstValue= data.find(( i: any ) => i._id ===7) //TODO: cancion 50Centt
    const lastValue= data.find(( i: any ) => i._id ===6) //TODO: cancion TNT
    
    const resulTest :TrackModel[]= pipe.transform(data, 'name', 'desc');
     const firstResult = resulTest[0];
     const lastResult =  resulTest[resulTest.length -1]

    expect(firstResult).toEqual(lastValue);
    expect(lastResult).toEqual(firstValue)

  })
});
