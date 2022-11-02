import { Component, OnInit } from '@angular/core';
import { MultimediaModel } from 'src/app/models/multimediaModel';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arregloSeries: MultimediaModel []=[
    {
      titulo:"Stranger Things",
      tipo:"serie",
      descripcion:"una pelicula clasica de robert deniro",
      genero:"drama",
      año:"1999",
      imagenMultimedia:"https://es.web.img3.acsta.net/pictures/22/05/14/13/26/5638861.jpg",
      id_multimedia:"pelicula3",
      pais:"usa",
      duracion:"180m",
      productora:"nose",
      reparto:"nose",
      guion:"noses",
      direccion:"nose",
      musica:"nose",
    },
    {
      titulo:"Breaking Bad",
      tipo:"serie",
      descripcion:"una pelicula clasica del futuro",
      genero:"ciencia ficcion",
      año:"1999",
      imagenMultimedia:"https://m.media-amazon.com/images/M/MV5BNDkyZThhNmMtZDBjYS00NDBmLTlkMjgtNWM2ZWYzZDQxZWU1XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
      id_multimedia:"pelicula3",
      pais:"usa",
      duracion:"180m",
      productora:"nose",
      reparto:"nose",
      guion:"noses",
      direccion:"nose",
      musica:"nose",
    },
  ]
}
