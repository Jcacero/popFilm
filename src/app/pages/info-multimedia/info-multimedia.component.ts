import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MultimediaModel } from 'src/app/models/multimediaModel';
import { MultimediaService } from 'src/app/servicios/multimedia.service';

@Component({
  selector: 'app-info-multimedia',
  templateUrl: './info-multimedia.component.html',
  styleUrls: ['./info-multimedia.component.css']
})
export class InfoMultimediaComponent implements OnInit {

  arregloMultimedia: MultimediaModel [];
  multimediaSeleccionada: MultimediaModel|undefined;
  
  constructor(private servicioMultimedia:MultimediaService, private router: Router) { }

  ngOnInit(): void {
    this.servicioMultimedia.obtenerMultimedia().subscribe(multimedia=>this.arregloMultimedia=multimedia)
    
    let url= this.router.url
    url=url.replace("/info-multimedia/","")
    console.log(url)
    this.mostrarMultimediaSelecionada(url)
  }

  mostrarMultimediaSelecionada(id:string){
      this.servicioMultimedia.obtenerMultimediaPorId(id).subscribe(
        l=>{
          this.multimediaSeleccionada=l
          console.log(this.multimediaSeleccionada)
        }
        )
  }

}
