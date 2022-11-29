import { Injectable } from '@angular/core';
import { AngularFirestoreCollection,AngularFirestore,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';
import { Usuarios } from '../models/usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private isLoged = false

  private usuariosCollection:AngularFirestoreCollection<Usuarios>

  constructor(private db:AngularFirestore,private galletita:CookieService) {
    this.usuariosCollection= this.db.collection("usuarios")
   }

   obtenerUsuarios(){ //obtengo usuarios
    return this.usuariosCollection.snapshotChanges().pipe(
      map(action=>action.map(a=>a.payload.doc.data()))
    )
  }
  login(form: FormGroup,ususariosCol: Usuarios[]){
    let texto = "no inicio"
    if(form.valid){
      ususariosCol.forEach(
        usuario=>{
          if(form.value.nombreUsu == usuario.user){
            if(form.value.contraUsu == usuario.contrasena){
              this.isLoged = true
              this.galletita.set("sesionIniciada",this.isLoged.toString())
              texto = "inicio sesion"
            }
          }
        }
      )
    }
  }
  
}
