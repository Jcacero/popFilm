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
          routerLink:'noticias'
      },
  ];
  }
  
}
