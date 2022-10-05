import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  multimedia:any[];
	responsiveOptions;

  constructor() { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {

    this.multimedia=[
      {
        id:"rr1",
        code:"3432",
        name:"Buzo rojo",
        description:"23423gfgd",
        price:2000,
        quantity:342,
        inventoryStatus:"CON STOCK",
        category:"ropa",
        image:"https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/294995508_1257032698441668_6839338054066685435_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=9P1M1rPGLCkAX_VganV&_nc_ht=scontent.faep9-1.fna&oh=00_AT9X43sGMS7waMGHEBRSMxGRFoUr1BbhWwond2zCzkED1A&oe=631C2709",
        rating:5,
      },
      {
        id:"rr1",
        code:"3432",
        name:"Buzo rojo",
        description:"23423gfgd",
        price:2000,
        quantity:342,
        inventoryStatus:"CON STOCK",
        category:"ropa",
        image:"https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/294995508_1257032698441668_6839338054066685435_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=9P1M1rPGLCkAX_VganV&_nc_ht=scontent.faep9-1.fna&oh=00_AT9X43sGMS7waMGHEBRSMxGRFoUr1BbhWwond2zCzkED1A&oe=631C2709",
        rating:5,
      },
      {
        id:"rr1",
        code:"3432",
        name:"Buzo rojo",
        description:"23423gfgd",
        price:2000,
        quantity:342,
        inventoryStatus:"CON STOCK",
        category:"ropa",
        image:"https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/294995508_1257032698441668_6839338054066685435_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=9P1M1rPGLCkAX_VganV&_nc_ht=scontent.faep9-1.fna&oh=00_AT9X43sGMS7waMGHEBRSMxGRFoUr1BbhWwond2zCzkED1A&oe=631C2709",
        rating:5,
      },
      {
        id:"rr1",
        code:"3432",
        name:"Buzo rojo",
        description:"23423gfgd",
        price:2000,
        quantity:342,
        inventoryStatus:"CON STOCK",
        category:"ropa",
        image:"https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/294995508_1257032698441668_6839338054066685435_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=9P1M1rPGLCkAX_VganV&_nc_ht=scontent.faep9-1.fna&oh=00_AT9X43sGMS7waMGHEBRSMxGRFoUr1BbhWwond2zCzkED1A&oe=631C2709",
        rating:5,
      },
      {
        id:"rr1",
        code:"3432",
        name:"Buzo rojo",
        description:"23423gfgd",
        price:2000,
        quantity:342,
        inventoryStatus:"CON STOCK",
        category:"ropa",
        image:"https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/294995508_1257032698441668_6839338054066685435_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=9P1M1rPGLCkAX_VganV&_nc_ht=scontent.faep9-1.fna&oh=00_AT9X43sGMS7waMGHEBRSMxGRFoUr1BbhWwond2zCzkED1A&oe=631C2709",
        rating:5,
      }
    ]
  }

}
