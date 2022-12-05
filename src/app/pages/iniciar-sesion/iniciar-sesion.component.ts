import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  constructor(private servicioUsuario:UsuariosService) {
    servicioUsuario.obtenerUsuarios().subscribe(u=>{
      this.usuarioCollection=u
    })
  }
  usuarioCollection:Usuarios []
  ngOnInit(): void {}

  loginForm= new FormGroup({
    username:new FormControl('',Validators.required),
    contrasena:new FormControl('',Validators.required)
   })
   
   iniciarSesion(){
    console.log(this.usuarioCollection)
    this.servicioUsuario.login(this.loginForm,this.usuarioCollection)
   }
}
