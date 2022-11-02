import { Component, OnInit } from '@angular/core';
import { Cineastas } from 'src/app/models/cineastas';
import { CineastasService } from 'src/app/servicios/cineastas.service';
@Component({
  selector: 'app-cineastas',
  templateUrl: './cineastas.component.html',
  styleUrls: ['./cineastas.component.css']
})
export class CineastasComponent implements OnInit {
  displayModal: boolean;
  showModalDialog() {
    this.displayModal = true;
  }

  display: boolean = false;

  showDialog() {
      this.display = true;
  }

  arregloCineastas:Cineastas []

  constructor(private servicioCineastas:CineastasService) { }

  ngOnInit(): void {
    this.servicioCineastas.obtenerCineastas().subscribe(cineasta=>this.arregloCineastas=cineasta)
  }

}
