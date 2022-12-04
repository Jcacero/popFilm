import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cineastas } from 'src/app/models/cineastas';
import { StorageService } from 'src/app/servicios/storage.service';
import { CineastasService } from 'src/app/servicios/cineastas.service';
@Component({
  selector: 'app-cineastas',
  templateUrl: './cineastas.component.html',
  styleUrls: ['./cineastas.component.css']
})
export class CineastasComponent implements OnInit {
  cineastaSelec:Cineastas =     {
  nombreApodo:"string",
  nombreCompleto:"string",
  edad:0,
  fechaNac:"string",
  lugarNac:"string",
  residencia:"string",
  religion:"string",
  educacion:"string",
  anosActivo:"string",
  curiosidad:"string",
  premios:"string",
  cantMultimedia:"string",
  trabajosDestacados:"string",
  descripcion:"string",
  rol:"string",
  imagenCineasta:"string",
  idCineasta:"string"
}
  displayModal: boolean;
  showModalDialog(id:Cineastas) {
    this.cineastaSelec = id;
    this.displayModal = true;
  }

  display: boolean = false;

  showDialog() {
      this.display = true;
  }


  constructor(private servicioCineastas:CineastasService,  private servicioStorage: StorageService) { 
    
  }

  ngOnInit(): void {
    this.servicioCineastas.obtenerCineastas().subscribe(cineasta=>this.arregloCineastas=cineasta)
  }

  arregloCineastas:Cineastas []
  textoBoton:string;
  imagen:string;
  nombreImagen:string
  modalVisible:boolean=false;
  eliminarVisible:boolean=false;

  cineasta=new FormGroup({
    nombreApodo:new FormControl('',Validators.required),
    nombreCompleto:new FormControl('',Validators.required),
    edad:new FormControl('',Validators.required),
    fechaNac:new FormControl('',Validators.required),
    lugarNac:new FormControl('',Validators.required),
    residencia:new FormControl('',Validators.required),
    educacion:new FormControl('',Validators.required),
    anosActivo:new FormControl('',Validators.required),
    religion:new FormControl('',Validators.required),
    curiosidad:new FormControl('',Validators.required),
    premios:new FormControl('',Validators.required),
    cantMultimedia:new FormControl('',Validators.required),
    trabajosDestacados:new FormControl('',Validators.required),
    descripcion:new FormControl('',Validators.required),
    rol:new FormControl('',Validators.required),
    imagenCineasta:new FormControl
  })

  agregarCineasta(){
    if(this.cineasta.valid){
      let nuevoCineasta:Cineastas ={
        nombreApodo:this.cineasta.value.nombreApodo!,
        nombreCompleto:this.cineasta.value.nombreCompleto!,
        edad:this.cineasta.value.edad,
        fechaNac:this.cineasta.value.fechaNac!,
        lugarNac:this.cineasta.value.lugarNac!,
        residencia: this.cineasta.value.residencia!,
        educacion:this.cineasta.value. educacion!,
        anosActivo:this.cineasta.value. anosActivo!,
        religion:this.cineasta.value.religion!,
        curiosidad:this.cineasta.value.curiosidad!,
        premios:this.cineasta.value.premios!,
        cantMultimedia:this.cineasta.value. cantMultimedia,
        trabajosDestacados:this.cineasta.value.trabajosDestacados!,
        descripcion:this.cineasta.value.descripcion!,
        rol:this.cineasta.value.rol!,
        imagenCineasta:"",
        idCineasta:""
      }

      this.servicioStorage.subirImagen(this.nombreImagen,this.imagen,"cineastas")
      .then(
        async res=>{
          this.servicioStorage.obtenerUrlImagen(res).
          then(
            async url=>{
              await this.servicioCineastas.crearCineasta(nuevoCineasta,url).then((cineasta)=>{
                alert("El cineasta fue agregado con éxito");
              })
              .catch((error)=>{
                alert("El cineasta no pudo ser agregado\n Error:"+error);
              })
            }
          )
        }
      )
    }
    else{
      alert("El formulario no está comlpeto")
    }
  }

  editarCineasta(){
    let datos:Cineastas ={
      nombreApodo:this.cineasta.value.nombreApodo!,
        nombreCompleto:this.cineasta.value.nombreCompleto!,
        edad:this.cineasta.value.edad,
        fechaNac:this.cineasta.value.fechaNac!,
        lugarNac:this.cineasta.value.lugarNac!,
        residencia: this.cineasta.value.residencia!,
        educacion:this.cineasta.value. educacion!,
        anosActivo:this.cineasta.value. anosActivo!,
        religion:this.cineasta.value.religion!,
        curiosidad:this.cineasta.value.curiosidad!,
        premios:this.cineasta.value.premios!,
        cantMultimedia:this.cineasta.value. cantMultimedia,
        trabajosDestacados:this.cineasta.value.trabajosDestacados!,
        descripcion:this.cineasta.value.descripcion!,
        rol:this.cineasta.value.rol!,
        imagenCineasta:this.cineasta.value.imagenCineasta!,
        idCineasta:this.cineastaSelec.idCineasta
    }

    this.servicioCineastas.modificarCineasta(this.cineastaSelec.idCineasta,datos).then(c=>{
      alert("El cineasta fue modificado con éxito")
    })
    .catch((error)=>{
      alert("El cineasta no pudo ser modificado \n Error:"+error)
    })
    
  }
  

  mostrarDialogo(){
    this.textoBoton="Agregar Cineasta"
    this.modalVisible=true;
  }

  mostrarEditar(cineastaSelec:Cineastas){
    this.cineastaSelec=cineastaSelec
    this.textoBoton="Editar Cineasta"
    this.modalVisible=true;
    this.cineasta.setValue({
      nombreApodo:cineastaSelec.nombreApodo,
        nombreCompleto:cineastaSelec.nombreCompleto,
        edad:cineastaSelec.edad,
        fechaNac:cineastaSelec.fechaNac,
        lugarNac:cineastaSelec.lugarNac,
        residencia: cineastaSelec.residencia,
        educacion:cineastaSelec. educacion,
        anosActivo:cineastaSelec. anosActivo,
        religion:cineastaSelec.religion,
        curiosidad:cineastaSelec.curiosidad,
        premios:cineastaSelec.premios,
        cantMultimedia:cineastaSelec. cantMultimedia,
        trabajosDestacados:cineastaSelec.trabajosDestacados,
        descripcion:cineastaSelec.descripcion,
        rol:cineastaSelec.rol,
        imagenCineasta:cineastaSelec.imagenCineasta,
    })
  }

  cargarDatos(){
    if(this.textoBoton==="Agregar Cineasta"){
      this.agregarCineasta()
    }
    else if (this.textoBoton==="Editar Cineasta"){
      this.editarCineasta()
    }
    this.modalVisible = false;
    this.cineasta.reset();
  }

  mostrarEliminar(cineastaSelec:Cineastas){
    this.cineastaSelec = cineastaSelec 
    this.eliminarVisible = true;
  }

  borrarCineasta(){
    this.servicioCineastas.eliminarCineasta(this.cineastaSelec.idCineasta).then((resp)=>{
      alert("El cineasta fue eliminado con éxito")
    })
    .catch((error)=>{
      alert("El cineasta no pudo ser eliminado \n Error:"+error)
    })
    this.eliminarVisible = false
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
