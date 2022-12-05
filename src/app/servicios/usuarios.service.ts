import { Injectable } from '@angular/core';
import { AngularFirestoreCollection,AngularFirestore,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';
import { Usuarios } from '../models/usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private isLoged = false

  private usuariosCollection:AngularFirestoreCollection<Usuarios>

  constructor(private db:AngularFirestore,private galletita:CookieService, private router:Router) {
    this.usuariosCollection= this.db.collection("usuarios")
   }

   obtenerUsuarios(){ //obtengo usuarios
    return this.usuariosCollection.snapshotChanges().pipe(
      map(action=>action.map(a=>a.payload.doc.data()))
    )
  }
  login(form: FormGroup,ususariosCol: Usuarios[]){
    let texto = "Usuario Incorrecto"
    if(form.valid){
      ususariosCol.forEach(
        usuario=>{
          if(form.value.username == usuario.user){
            if(form.value.contrasena == usuario.contrasena){
              this.galletita.set("sesionIniciada","true")
              texto = "inicio sesion"
              this.router.navigateByUrl("/peliculas")
              setTimeout(()=>{ location.reload()},300)
             
            }
          }
        }
      )
    }
      alert(texto)
  }


  logOut(){
    alert("Ha cerrado sesion")
    this.galletita.delete("sesionIniciada")
    this.router.navigateByUrl("/peliculas")
              setTimeout(()=>{ location.reload()},300)
             
  }
  
}