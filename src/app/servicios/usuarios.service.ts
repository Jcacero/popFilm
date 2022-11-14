import { Injectable } from '@angular/core';
import { AngularFirestoreCollection,AngularFirestore,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuariosCollection:AngularFirestoreCollection<usuarios>

  constructor(private db:AngularFirestore) {
    this.usuariosCollection=db.collection('usuarios')
   }

   obtenerUsuarios(){ //obtengo usuarios
    return this.usuariosCollection.snapshotChanges().pipe(
      map(action=>action.map(a=>a.payload.doc.data()))
    )
  }
}
