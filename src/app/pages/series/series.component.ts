import { Component, OnInit } from '@angular/core';
import { Series } from 'src/app/models/series';
import { SeriesService } from 'src/app/servicios/series.service';
import { StorageService } from 'src/app/servicios/storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {


  generos: any[];
  generoSeleccionado: string;
  value10: any;



  constructor(private servicioSeries:SeriesService,private servicioStorage: StorageService, private galletita: CookieService) { 

  
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

      this.admin=this.galletita.check("sesionIniciada")
  }

  admin:boolean=false;

  arregloSeries:Series [];
  textoBoton:string;
  serieSeleccionada:Series;
  eliminarVisible:boolean=false;
  imagen:string;
  nombreImagen:string;
  modalVisible:boolean=false;
  habilitarImagen:boolean=false;

  
  
  serie=new FormGroup({
    titulo:new FormControl('',Validators.required),
    tipo:new FormControl(''),
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
    cantidadCaps:new FormControl('',Validators.required),
    imagenMultimedia: new FormControl("", Validators.required) 
  })
  

  agregarSerie(){
    if(this.serie.valid){
      let nuevaSerie:Series ={
        titulo:this.serie.value.titulo!,
        tipo:"Serie",
        descripcion:this.serie.value.descripcion!,
        genero:this.serie.value.genero!,
        ano:this.serie.value.ano!,
        pais:this.serie.value.pais!,
        duracion:this.serie.value.duracion,
        productora:this.serie.value.productora!,
        reparto:this.serie.value.reparto!,
        guion:this.serie.value.guion!,
        direccion:this.serie.value.direccion!,
        musica:this.serie.value.musica!,
        cantidadCaps:this.serie.value.cantidadCaps,
        numeroTemporadas:this.serie.value.numeroTemporadas,
        imagenMultimedia:"",
        id_serie:""
      }

      this.servicioStorage.subirImagen(this.nombreImagen,this.imagen,'series')
      .then(
        async res=>{
          this.servicioStorage.obtenerUrlImagen(res).
          then(
            async url=>{
              await this.servicioSeries.crearSerie(nuevaSerie,url).then((serie)=>{
                alert("La Serie fue agregada con ??xito");
              })
              .catch((error)=>{
                alert("la Serie no pudo ser cargada\n Error:"+error);
              })
            }
          )
        }
      )
    }
    else{
      alert("El formulario no esta completo")
    }
  }

  editarSerie(){
    this.serie.removeControl("imagenMultimedia")
    let datos:Series ={
      titulo:this.serie.value.titulo!,
      tipo:this.serie.value.tipo!,
      descripcion:this.serie.value.descripcion!,
      genero:this.serie.value.genero!,
      ano:this.serie.value.ano,
      pais:this.serie.value.pais!,
      duracion:this.serie.value.duracion,
      productora:this.serie.value.productora!,
      reparto:this.serie.value.reparto!,
      guion:this.serie.value.guion!,
      direccion:this.serie.value.direccion!,
      musica:this.serie.value.musica!,
      cantidadCaps:this.serie.value.cantidadCaps,
      numeroTemporadas:this.serie.value.numeroTemporadas,
      imagenMultimedia:this.serieSeleccionada.imagenMultimedia,
      id_serie:this.serieSeleccionada.id_serie,
    }
    this.servicioSeries.modificarSerie(this.serieSeleccionada.id_serie,datos).then(s=>{
      alert("La serie fue modificada con ??xito")
    })
    .catch((error)=>{
      alert("No se pudo modificar la serie \n Error:"+error)
    })
  }

  mostrarDialogo(){
    this.habilitarImagen=false;
    this.serie.setControl("imagenMultimedia",new FormControl("", Validators.required))
    this.textoBoton="Agregar Serie"
    this.modalVisible=true;
  }

  cargarDatos(){
    if(this.textoBoton==="Agregar Serie"){
      this.agregarSerie()
    }
    else if (this.textoBoton==="Editar Serie"){
     this.editarSerie()
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

  borrarSerie(id:string){
    this.servicioSeries.eliminarSerie(id).then((resp)=>{
      alert("La serie fue eliminada con ??xito")
    })
    .catch((error)=>{
      alert("La serie no pudo ser eliminada \n Error:"+error)
    })
  }

  mostrarEditar(serieSeleccionada:Series){
    this.imagen="";
    this.habilitarImagen=true;
    this.serieSeleccionada=serieSeleccionada
    this.textoBoton="Editar Serie"
    this.modalVisible=true;
    this.serie.setValue({
      titulo:serieSeleccionada.titulo,
      tipo:serieSeleccionada.tipo,
      descripcion:serieSeleccionada.descripcion,
      genero:serieSeleccionada.genero,
      ano:serieSeleccionada.ano,
      pais:serieSeleccionada.pais,
      duracion:serieSeleccionada.duracion,
      productora:serieSeleccionada.productora,
      reparto:serieSeleccionada.reparto,
      guion:serieSeleccionada.guion,
      direccion:serieSeleccionada.direccion,
      musica:serieSeleccionada.musica,
      cantidadCaps:serieSeleccionada.cantidadCaps,
      numeroTemporadas:serieSeleccionada.numeroTemporadas,
      imagenMultimedia:serieSeleccionada.imagenMultimedia,

    })
  }

  
}
