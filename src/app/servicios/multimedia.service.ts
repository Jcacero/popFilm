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
    this.multimediaCollection=db.collection('multimedia') //obtiene las multimedias y se guardan en multimediaCollection
  }

  /* funcion para obtener multimedia */
  obtenerMultimedia(){
    return this.multimediaCollection.snapshotChanges().pipe( //snapshotChanges esta atento a los cambios y pipe funciona como filtro o puente
      map(action=>action.map(a=>a.payload.doc.data())) //map mapea todos los cambios
    )
  }
  
  /* obtine el id de la multimedia y luego la busca  */
  obtenerMultimediaPorId(id_multimedia:string){
    this.multimediaSeleccionada= this.db.collection('multimedia').doc(id_multimedia)
    return this.multimediaSeleccionada.snapshotChanges().pipe(
      map(action=>action.payload.data())
    )

  }

  /* Funcion para crear multimedia */  
  crearMultimedia(nuevaMultimedia:MultimediaModel, url:string){ //recibe los nuevos datos y la url de la imagen
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

  /* Funcion para modificar multimedia en la BD */
  modificarMultimedia(id_multimedia:string,nuevaData:MultimediaModel,){
    return this.db.collection('multimedia').doc(id_multimedia).update(nuevaData)
 }


 /* Funcion para modificar multimedia en la BD */
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
