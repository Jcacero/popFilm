import { Component, Input ,OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  modalVisible:boolean=false; 

  constructor(private galletita:CookieService) {}

  ngOnInit(): void {

    this.admin=this.galletita.check("sesionIniciada")

    this.items = [
      {
          label:'Peliculas',
          icon:'pi pi-ticket',
          routerLink:'/peliculas',
      },
      {
          label:'Series',
          icon:'pi pi-ticket',
          routerLink:'/series'
      },
      {
          label:'Cineastas',
          icon:'pi pi-fw pi-user',
          routerLink:'/cineastas'
      },
      {
          label: 'Admin', 
          icon: 'pi pi-user-plus',
          //visible:this.adminVisible,
          routerLink:"admin"
      }
  ];
}

  admin:boolean=false;

    loginForm= new FormGroup({
    username:new FormControl('',Validators.required),
    contrasena:new FormControl('',Validators.required)
   })
    mostrarDialogo(){
    this.modalVisible=true;
  }
}
