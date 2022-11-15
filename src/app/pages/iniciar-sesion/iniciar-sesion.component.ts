import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { usuarios } from 'src/app/models/usuarios';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  public path: any = []
  constructor(private activate: ActivatedRoute) {
    this.activate.url.subscribe(data=>{
      this.path = data[0].path
    });
    this.getImage();
   }
   getImage(){
    switch(this.path){
      case 'login':
        return'../../../assets/imagenes/FondoPochoclos1.jpg';
    }
   }
  ngOnInit(): void {
  }

  loginForm= new FormGroup({
    username:new FormControl('',Validators.required),
    contrasena:new FormControl('',Validators.required)
   })
   
}
