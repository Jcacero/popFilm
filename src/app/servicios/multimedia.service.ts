import { Injectable } from '@angular/core';
import { AngularFirestoreCollection,AngularFirestore,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { MultimediaModel } from '../models/multimediaModel';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  private multimediaCollection:AngularFirestoreCollection<MultimediaModel>
  private multimediaSeleccionada:AngularFirestoreDocument<MultimediaModel>

  constructor(private db:AngularFirestore) { 
    this.multimediaCollection=db.collection('multimedia')
  }

  obtenerMultimedia(){
    return this.multimediaCollection.snapshotChanges().pipe(
      map(action=>action.map(a=>a.payload.doc.data()))
    )
  }
  
  obtenerMultimediaPorId(id_multimedia:string){
    this.multimediaSeleccionada= this.db.collection('multimedia').doc(id_multimedia)
    return this.multimediaSeleccionada.snapshotChanges().pipe(
      map(action=>action.payload.data())
    )

  }

  modificarMultimedia(id_multimedia:string,nuevaData:MultimediaModel,){
    return this.db.collection('multimedia').doc(id_multimedia).update(nuevaData)
  }

  
}
