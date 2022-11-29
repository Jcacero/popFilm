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
  crearMultimedia(nuevaMultimedia:MultimediaModel, url:string){
    return new Promise(async (resolve,reject)=>{
      try{
        const id = this.db.createId();
        nuevaMultimedia.id_multimedia = id ;
        nuevaMultimedia.imagenMultimedia=url
        const resultado= await this.multimediaCollection.doc(id).set(nuevaMultimedia);
        resolve(resultado);
      }
      catch(error){
        reject(error);
      }
    })
  }

  
  modificarMultimedia(id_multimedia:string,nuevaData:MultimediaModel,){
    return this.db.collection('multimedia').doc(id_multimedia).update(nuevaData)
  }


  eliminarMultimedia(id_multimedia:string){
    return new Promise((resolve, reject) => {
      try{
          const resp= this.multimediaCollection.doc(id_multimedia).delete()
          resolve(resolve)
      }
      catch(error){ 
        reject(error)
      }
    })
  }

  
}
