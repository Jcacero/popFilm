import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

	responsiveOptions;
  @Input() miMultimedia:any[]
  @Output () borrar = new EventEmitter<string>()
  @Output () editar = new EventEmitter<any>()
  servicioMultimedia: any;

  constructor(private galletita: CookieService) { 
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
    this.admin=this.galletita.check("sesionIniciada")
  }

  admin:boolean=false;

  multimediaSeleccionada:any;
  textoBoton:string;
  /* dialog para eliminar */
  eliminarVisible:boolean=false;
  /* dialog para editar */
  modalVisible:boolean=false;

  /* tipo de multimedia seleccionada */
  tipoMultiSelec:string;

  mostrarEliminar(multimediaSeleccionada:any){
    this.multimediaSeleccionada = multimediaSeleccionada
    this.identificador(multimediaSeleccionada)
    this.eliminarVisible = true;
  }

  identificador(multimediaSeleccionada:any){
    if(multimediaSeleccionada.tipo.name=="Pelicula"){
      this.tipoMultiSelec="Pelicula"
    }else{
      this.tipoMultiSelec="Serie"
    }
  }

  borrarContenido(id:string){
    console.log(id)
    this.eliminarVisible = false;
    this.borrar.emit(id)
  }


  editarContenido(multimediaSeleccionada:any){
    this.identificador(multimediaSeleccionada)
    console.log(multimediaSeleccionada)
    this.editar.emit(multimediaSeleccionada)
  }
}
