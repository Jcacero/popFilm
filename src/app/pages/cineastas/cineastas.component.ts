import { Component, OnInit } from '@angular/core';
import { Cineastas } from 'src/app/models/cineastas';
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

  arregloCineastas:Cineastas []

  constructor(private servicioCineastas:CineastasService) { 
    
  }

  ngOnInit(): void {
    this.servicioCineastas.obtenerCineastas().subscribe(cineasta=>this.arregloCineastas=cineasta)
  }

}
