import { Component, Input ,OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  modalVisible:boolean=false; 

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
          label:'Peliculas',
          routerLink:'/peliculas',
      },
      {
          label:'Series',
          routerLink:'/series'
      },
      {
          label:'Cineastas',
          icon:'pi pi-fw pi-user',
          routerLink:'/cineastas'
      },
      {
          label:'Noticias',
          icon:'pi pi-fw pi-calendar',
          routerLink:'/noticias'
      },
  ];
}
    loginForm= new FormGroup({
    username:new FormControl('',Validators.required),
    contrasena:new FormControl('',Validators.required)
   })
    mostrarDialogo(){
    this.modalVisible=true;
  }
}
