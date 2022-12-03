import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { MultimediaModel } from 'src/app/models/multimediaModel';

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

  }

  multimediaSeleccionada:any;
  textoBoton:string;
  /* dialog para eliminar */
  eliminarVisible:boolean=false;
  /* dialog para editar */
  modalVisible:boolean=false;


  mostrarEliminar(multimediaSeleccionada:any){
    this.multimediaSeleccionada = multimediaSeleccionada
    this.eliminarVisible = true;
  }

  borrarContenido(id:string){
    console.log(id)
    this.eliminarVisible = false;
    this.borrar.emit(id)
  }

  editarContenido(multimediaSeleccionada:any){
    this.editar.emit(multimediaSeleccionada)
  }
}
