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
}
