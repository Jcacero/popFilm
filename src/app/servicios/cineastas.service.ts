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

  /* Funcion para obtener cineastas de la base de datos */
  obtenerCineastas(){
    return this.cineastasCollection.snapshotChanges().pipe(
      map(action=>action.map(a=>a.payload.doc.data()))
    )
  }

  /* Funcion para crear cineastas en la BD */
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

  /* Funcion para modificar cineastas en la BD */
  modificarCineasta(idCineasta:string,nuevaData:Cineastas,){ //recibe como paramentro el id 
    return this.db.collection('cineastas').doc(idCineasta).update(nuevaData)  //busca en la coleccion cineastas con ese id
 }


 /* Funcion para eliminar Cineasta en la BD */
  eliminarCineasta(idCineasta:string){ //recibe id de cineasta
    return new Promise((resolve, reject) => { //devuelve una promesa
      try{
          const resp= this.cineastasCollection.doc(idCineasta).delete() //el id del cineasta coincide con el de alguno de la BD, se aplica el metodo delete y se guarda en la constante resp
          resolve(resolve)
      }
      catch(error){ 
        reject(error)
      }
    })
  }
}
