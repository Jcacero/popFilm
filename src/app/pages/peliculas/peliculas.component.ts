import { Component, OnInit } from '@angular/core';
import { MultimediaModel } from 'src/app/models/multimediaModel';
import { MultimediaService } from 'src/app/servicios/multimedia.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  arregloPeliculas2: MultimediaModel []
  constructor(private servicioMultimedia:MultimediaService) { }

  ngOnInit(): void {
      this.servicioMultimedia.obtenerMultimedia().subscribe(multimedia=>this.arregloPeliculas2=multimedia)
  }

  arregloPeliculas: MultimediaModel []=[
    {
      titulo:"Taxi driver",
      tipo:"Pelicula",
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
      tipo:"Pelicula",
      descripcion:"una pelicula clasica del futuro",
      genero:"Drama",
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
      tipo:"Pelicula",
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
      tipo:"Pelicula",
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
      tipo:"Pelicula",
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
