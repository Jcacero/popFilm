import { Component, OnInit } from '@angular/core';
import { Series } from 'src/app/models/series';
import { SeriesService } from 'src/app/servicios/series.service';
import { StorageService } from 'src/app/servicios/storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  tipos: any[];
  tipoSeleccionado: string;
  generos: any[];
  generoSeleccionado: string;
  value10: any;

  arregloSeries:Series [];

  constructor(private servicioSeries:SeriesService,private servicioStorage: StorageService) { 

      this.tipos = [
        {name: 'Pelicula'},
        {name: 'Serie'},
      ];
  
      this.generos = [
        {name: 'Terror'},
        {name: 'Comedia'},
        {name: 'Romance'},
        {name: 'Accion'},
        {name: 'Aventura'},
        {name: 'Ciencia Ficcion'},
      ];
  }

  ngOnInit(): void {
    this.servicioSeries.obtenerSeries().subscribe(series=>
      this.arregloSeries=series)
  }

  textoBoton:string;
  serieSeleccionada:Series;
  eliminarVisible:boolean=false;
  imagen:string;
  nombreImagen:string;

  
  
  serie=new FormGroup({
    titulo:new FormControl('',Validators.required),
    tipo:new FormControl('',Validators.required),
    descripcion:new FormControl('',Validators.required),
    genero:new FormControl('',Validators.required),
    ano:new FormControl('',Validators.required),
    pais:new FormControl('',Validators.required),
    duracion:new FormControl('',Validators.required),
    productora:new FormControl('',Validators.required),
    reparto:new FormControl('',Validators.required),
    guion:new FormControl('',Validators.required),
    direccion:new FormControl('',Validators.required),
    musica:new FormControl('',Validators.required),
    numeroTemporadas:new FormControl('',Validators.required),
    cantidadCaps:new FormControl('',Validators.required)
  })
  
  modalVisible:boolean=false;

  agregarSerie(){
    if(this.serie.valid){
      let nuevaSerie:Series ={
        titulo:this.serie.value.titulo!,
        tipo:this.serie.value.tipo!,
        descripcion:this.serie.value.descripcion!,
        genero:this.serie.value.genero!,
        ano:this.serie.value.ano!,
        imagenMultimedia:"",
        id_serie:"",
        pais:this.serie.value.pais!,
        duracion:this.serie.value.duracion!,
        productora:this.serie.value.productora!,
        reparto:this.serie.value.reparto!,
        guion:this.serie.value.guion!,
        direccion:this.serie.value.direccion!,
        musica:this.serie.value.musica!,
        numeroTemporadas:this.serie.value.numeroTemporadas!,
        cantidadCaps:this.serie.value.cantidadCaps!
      }

      this.servicioStorage.subirImagen(this.nombreImagen,this.imagen)
      .then(
        async res=>{
          this.servicioStorage.obtenerUrlImagen(res).
          then(
            async url=>{
              await this.servicioSeries.crearSerie(nuevaSerie,url).then((serie)=>{
                alert("La Serie fue agregada con éxito");
              })
              .catch((error)=>{
                alert("la Serie no pudo ser cargada\n Error:"+error);
              })
            }
          )
        }
      )

    }
  }

  mostrarDialogo(){
    this.textoBoton="Agregar Serie"
    this.modalVisible=true;
  }

  cargarDatos(){
    if(this.textoBoton==="Agregar Serie"){
      this.agregarSerie()
    }
    else if (this.textoBoton==="Editar Serie"){
      
    }
    this.modalVisible = false;
    this.serie.reset();
  }

  cargarImagen(event:any){
    let archivo=event.target.files[0];
    let  reader=new FileReader();
    if(archivo!=undefined){
      reader.readAsDataURL(archivo)
      reader.onloadend = () =>{
        let url = reader.result
        if(url!=null){
          this.nombreImagen = archivo.name
          this.imagen=url.toString()
        }
      }
    }
  }
}
