import { Injectable } from '@angular/core';
import { AngularFirestoreCollection,AngularFirestore,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Series } from '../models/series';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private seriesCollection:AngularFirestoreCollection<Series>
  private serieSeleccionada:AngularFirestoreDocument<Series>

  constructor(private db:AngularFirestore) {
    this.seriesCollection=db.collection('series')
   }

  
  obtenerSeries(){
    return this.seriesCollection.snapshotChanges().pipe(
      map(action=>action.map(a=>a.payload.doc.data()))
    )
  }
  
  obtenerSeriesPorId(id_serie:string){
    this.serieSeleccionada= this.db.collection('series').doc(id_serie)
    return this.serieSeleccionada.snapshotChanges().pipe(
      map(action=>action.payload.data())
    )

  }

  modificarSeries(id_serie:string,nuevaData:Series){
    return this.db.collection('series').doc(id_serie).update(nuevaData)
  }

  crearSerie(nuevaSerie:Series, url:string){
    return new Promise(async (resolve,reject)=>{
      try{
        const id = this.db.createId();
        nuevaSerie.id_serie = id ;
        nuevaSerie.imagenMultimedia=url
        const resultado= await this.seriesCollection.doc(id).set(nuevaSerie);
        resolve(resultado);
      }
      catch(error){
        reject(error);
      }
    })
  }





}
