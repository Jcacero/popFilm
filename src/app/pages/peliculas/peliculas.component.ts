import { Component, OnInit } from '@angular/core';
import { MultimediaModel } from 'src/app/models/multimediaModel';
import { MultimediaService } from 'src/app/servicios/multimedia.service';
import { StorageService } from 'src/app/servicios/storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {


  tipos: any[];
  tipoSeleccionado: string;
  generos: any[];
  generoSeleccionado: string;
  value10: any;

  constructor(private servicioMultimedia:MultimediaService, private servicioStorage: StorageService) {
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
      this.servicioMultimedia.obtenerMultimedia().subscribe(multimedia=>
        this.arregloPeliculas2=multimedia)
  }


  arregloPeliculas2: MultimediaModel []
  textoBoton:string;
  MultimediaSeleccionada:MultimediaModel;
  eliminarVisible:boolean=false;
  imagen:string;
  nombreImagen:string;

  
  
  multimedia=new FormGroup({
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
    musica:new FormControl('',Validators.required)
  })
  
  modalVisible:boolean=false;

  agregarMultimedia(){
    if(this.multimedia.valid){
      let nuevaMultimedia:MultimediaModel ={
        titulo:this.multimedia.value.titulo!,
        tipo:this.multimedia.value.tipo!,
        descripcion:this.multimedia.value.descripcion!,
        genero:this.multimedia.value.genero!,
        ano:this.multimedia.value.ano!,
        imagenMultimedia:"",
        id_multimedia:"",
        pais:this.multimedia.value.pais!,
        duracion:this.multimedia.value.duracion!,
        productora:this.multimedia.value.productora!,
        reparto:this.multimedia.value.reparto!,
        guion:this.multimedia.value.guion!,
        direccion:this.multimedia.value.direccion!,
        musica:this.multimedia.value.musica!
    
      }
      this.servicioStorage.subirImagen(this.nombreImagen,this.imagen)
      .then(
        async res=>{
          this.servicioStorage.obtenerUrlImagen(res).
          then(
            async url=>{
              await this.servicioMultimedia.crearMultimedia(nuevaMultimedia,url).then((multimedia)=>{
                alert("La pelicula fue agregada con éxito");
              })
              .catch((error)=>{
                alert("la pelicula no pudo ser cargada\n Error:"+error);
              })
            }
          )
        }
      )
    }


  }

  mostrarDialogo(){
    this.textoBoton="Agregar Pelicula"
    this.modalVisible=true;
  }

  cargarDatos(){
    if(this.textoBoton==="Agregar Pelicula"){
      this.agregarMultimedia()
    }
    else if (this.textoBoton==="Editar Pelicula"){
      
    }
    this.modalVisible = false;
    this.multimedia.reset();
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
