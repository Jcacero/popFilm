import { Injectable } from '@angular/core';
import { AngularFirestoreCollection,AngularFirestore } from '@angular/fire/compat/firestore';
import { Cineastas } from '../models/cineastas';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CineastasService {

  private cineastasCollection:AngularFirestoreCollection<Cineastas>

  constructor(private db:AngularFirestore) { 
    this.cineastasCollection=db.collection('cineastas')
  }

  obtenerCineastas(){
    return this.cineastasCollection.snapshotChanges().pipe(
      map(action=>action.map(a=>a.payload.doc.data()))
    )
  }

  crearCineasta(nuevoCineasta:Cineastas, url:string){
    return new Promise(async (resolve,reject)=>{
      try{
        const id = this.db.createId();
        nuevoCineasta.idCineasta = id ;
        nuevoCineasta.imagenCineasta=url
        const resultado= await this.cineastasCollection.doc(id).set(nuevoCineasta);
        resolve(resultado);
      }
      catch(error){
        reject(error);
      }
    })
  }

  modificarCineasta(idCineasta:string,nuevaData:Cineastas,){
    return this.db.collection('cineastas').doc(idCineasta).update(nuevaData)
 }


  eliminarCineasta(idCineasta:string){
    return new Promise((resolve, reject) => {
      try{
          const resp= this.cineastasCollection.doc(idCineasta).delete()
          resolve(resolve)
      }
      catch(error){ 
        reject(error)
      }
    })
  }
}
