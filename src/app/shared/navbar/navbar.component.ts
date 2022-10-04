import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
          label:'Peliculas',
          items:[
              {
                  label:'Terror',
                  icon:'pi pi-fw pi-plus',
              },
              {
                label:'Comedia',
                icon:'pi pi-fw pi-plus',
            },
            {
                label:'Documentales',
                icon:'pi pi-fw pi-plus',
            }
          ]
      },
      {
          label:'Series',
          items:[
              {
                  label:'Left',
                  icon:'pi pi-fw pi-align-left'
              },
              {
                  label:'Right',
                  icon:'pi pi-fw pi-align-right'
              },
              {
                  label:'Center',
                  icon:'pi pi-fw pi-align-center'
              },
              {
                  label:'Justify',
                  icon:'pi pi-fw pi-align-justify'
              },

          ]
      },
      {
          label:'Personas',
          icon:'pi pi-fw pi-user',
          items:[
              {
                  label:'Actores / Actrices',
                  icon:'pi pi-fw pi-user-plus',

              },
              {
                  label:'Directores',
                  icon:'pi pi-fw pi-user-minus',

              },
              {
                  label:'Guionistas',
                  icon:'pi pi-fw pi-users',
              }
          ]
      },
      {
          label:'Noticias',
          icon:'pi pi-fw pi-calendar',
      },
  ];
  }
  
}
