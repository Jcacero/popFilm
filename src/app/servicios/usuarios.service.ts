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
    this.usuariosCollection= this.db.collection("usuarios") //obtiene usuarios y guarda en usuariosCollecction
   }

   obtenerUsuarios(){ //Funcion para obtener usuarios de la BD
    return this.usuariosCollection.snapshotChanges().pipe(
      map(action=>action.map(a=>a.payload.doc.data()))
    )
  }
  login(form: FormGroup,ususariosCol: Usuarios[]){ //funcion loguear usuario, recibe formulario y coleccion de usuarios
    let texto = "Usuario Incorrecto"
    if(form.valid){ //si el usuario logra loguearse
      ususariosCol.forEach( //recorre los usuarios en la BD
        usuario=>{
          if(form.value.username == usuario.user){  //si username coincide con el de la BD
            if(form.value.contrasena == usuario.contrasena){ //si contrasena coincide con el de la BD
              this.galletita.set("sesionIniciada","true") //el valor de galletita es true
              texto = "inicio sesion" //el texto cambia a  inicio sesion
              this.router.navigateByUrl("/peliculas") //redirige a la ruta peliculas
              setTimeout(()=>{ location.reload()},300) //recarga la pagina
             
            }
          }
        }
      )
    }
      alert(texto) //si el usuario no es valido, se muestra el texto usuario incorrecto
  }


  //funcion para cerrar sesion
  logOut(){
    alert("Ha cerrado sesion")
    this.galletita.delete("sesionIniciada") //se elimina la cookie 
    this.router.navigateByUrl("/peliculas") //navega a peliculas
              setTimeout(()=>{ location.reload()},300) //refresca la pagina 
             
  }
  
}