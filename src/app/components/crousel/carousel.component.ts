import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

	responsiveOptions;
  @Input() miMultimedia:any[] //el componente hijo proporcionara un arreglo de tipo any
  @Output () borrar = new EventEmitter<string>() //este componente emite una funcion y se lo pasa al componente padre
  @Output () editar = new EventEmitter<any>() //este componente emite una funcion y se lo pasa al componente padre
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
    this.admin=this.galletita.check("sesionIniciada") //chekea que la sesion este iniciada
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

  //funcion para mostrar eliminar 
  mostrarEliminar(multimediaSeleccionada:any){ //recibe un objeto de tipo any
    this.multimediaSeleccionada = multimediaSeleccionada
    this.identificador(multimediaSeleccionada)
    this.eliminarVisible = true;
  }

  /* Funcion para identificar si el objeto es una serie o pelicula  */
  identificador(multimediaSeleccionada:any){
    if(multimediaSeleccionada.tipo.name=="Pelicula"){ //si el tipo es Pelicula, entonces se guarda Pelicula en la variable tipoMultiSelec
      this.tipoMultiSelec="Pelicula"
    }else{
      this.tipoMultiSelec="Serie" //si no se guara Serie
    }
  }

  /* funcion para borrar contenido */
  borrarContenido(id:string){
    console.log(id) //muestra id por consola para verificar que es el correcto
    this.eliminarVisible = false; 
    this.borrar.emit(id) //emite el id al componente padre para que ese lo utilice 
  }

  /* funcion para editar contenido */
  editarContenido(multimediaSeleccionada:any){
    this.identificador(multimediaSeleccionada) //identificamos si el objeto es serie o pelicula con la funcion identificador()
    console.log(multimediaSeleccionada) //mostramos el objeto recibido
    this.editar.emit(multimediaSeleccionada) //emitimos el objeto al componente padre para que lo utilice 
  }
}
