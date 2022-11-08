import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm= new FormGroup({
    username:new FormControl('',Validators.required),
    contrasena:new FormControl('',Validators.required)
   })

}
