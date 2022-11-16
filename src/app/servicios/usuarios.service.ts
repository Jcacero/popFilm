import { Injectable } from '@angular/core';
import { AngularFirestoreCollection,AngularFirestore,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuariosCollection:AngularFirestoreCollection<Usuarios>

  constructor(private db:AngularFirestore) {
    this.usuariosCollection= this.db.collection("usuarios")
   }

   obtenerUsuarios(){ //obtengo usuarios
    return this.usuariosCollection.snapshotChanges().pipe(
      map(action=>action.map(a=>a.payload.doc.data()))
    )

    
  }
}
