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
        titulo:"Taxi driver",
        descripcion:"una pelicula clasica de robert deniro",
        genero:"drama",
        año:"1999",
        imagenPelicula:"https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        idPelicula:"pelicula3",
        pais:"usa",
        duracion:"180m",
        productora:"nose",
        reparto:"nose",
        guion:"noses",
        direccion:"nose",
        musica:"nose",
      },
      {
        titulo:"Pulp Fiction",
        descripcion:"una pelicula clasica del futuro",
        genero:"ciencia ficcion",
        año:"1999",
        imagenPelicula:"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        idPelicula:"pelicula3",
        pais:"usa",
        duracion:"180m",
        productora:"nose",
        reparto:"nose",
        guion:"noses",
        direccion:"nose",
        musica:"nose",
      },
      {
        titulo:"ET",
        descripcion:"una pelicula clasica del futuro",
        genero:"ciencia ficcion",
        año:"1999",
        imagenPelicula:"https://upload.wikimedia.org/wikipedia/en/6/66/E_t_the_extra_terrestrial_ver3.jpg",
        idPelicula:"pelicula3",
        pais:"usa",
        duracion:"180m",
        productora:"nose",
        reparto:"nose",
        guion:"noses",
        direccion:"nose",
        musica:"nose",
      },
      {
        titulo:"Volver al futuro",
        descripcion:"una pelicula clasica del futuro",
        genero:"ciencia ficcion",
        año:"1999",
        imagenPelicula:"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        idPelicula:"pelicula3",
        pais:"usa",
        duracion:"180m",
        productora:"nose",
        reparto:"nose",
        guion:"noses",
        direccion:"nose",
        musica:"nose",
      },
      {
        titulo:"Volver al futuro",
        descripcion:"una pelicula clasica del futuro",
        genero:"ciencia ficcion",
        año:"1999",
        imagenPelicula:"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        idPelicula:"pelicula3",
        pais:"usa",
        duracion:"180m",
        productora:"nose",
        reparto:"nose",
        guion:"noses",
        direccion:"nose",
        musica:"nose",
      }
    ]
  }

}
