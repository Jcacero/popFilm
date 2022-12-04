import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MultimediaModel } from 'src/app/models/multimediaModel';
import { Series } from 'src/app/models/series';
import { MultimediaService } from 'src/app/servicios/multimedia.service';
import { SeriesService } from 'src/app/servicios/series.service';

@Component({
  selector: 'app-info-multimedia',
  templateUrl: './info-multimedia.component.html',
  styleUrls: ['./info-multimedia.component.css']
})
export class InfoMultimediaComponent implements OnInit {

  arregloMultimedia: MultimediaModel [];
  arregloSeries: Series [];
  contenidoSeleccionado: any;
  
  
  constructor(private servicioMultimedia:MultimediaService,private servicioSeries:SeriesService ,private router: Router) { }

  ngOnInit(): void {
    /* obtenemos las peliculas */
    this.servicioMultimedia.obtenerMultimedia().subscribe(multimedia=>this.arregloMultimedia=multimedia)
    /* obtenemos las series */
    this.servicioSeries.obtenerSeries().subscribe(series=>this.arregloSeries=series)
    
    let url= this.router.url //obtenemos url del contenido
    url=url.replace("/info-multimedia/","") //sacamos la ruta para dejar solo el id
    console.log(url) //verificamos que el url obtenido sea el id
    this.mostrarMultimediaSelecionada(url) //se lo pasamos como paramentro a la funcion mostararMultimediaSelecionada
  }

   

  mostrarMultimediaSelecionada(id:string){ //busca mediante el id otrogado, la serie o pelicula que se selecciono
      //busca la pelicula por el id obtenido
    this.servicioMultimedia.obtenerMultimediaPorId(id).subscribe(p=>{
      this.contenidoSeleccionado=p
    })

    //busca la serie por el id obtenido
    this.servicioSeries.obtenerSeriesPorId(id).subscribe(s=>{
      this.contenidoSeleccionado=s
    })

    
  }




  
  

}
