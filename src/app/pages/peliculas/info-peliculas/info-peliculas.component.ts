import { Component, OnInit } from '@angular/core';
import { MultimediaService } from 'src/app/servicios/multimedia.service';

@Component({
  selector: 'app-info-peliculas',
  templateUrl: './info-peliculas.component.html',
  styleUrls: ['./info-peliculas.component.css']
})
export class InfoPeliculasComponent implements OnInit {

  constructor(_servicioMultimedia:MultimediaService) { }

  ngOnInit(): void {
  }
  getInfoPelis(){
    this._servicioMultimedia.obtenerMultimedia().subscribe((data)=>{
      this.peliculas = [];
    }

  }

}
