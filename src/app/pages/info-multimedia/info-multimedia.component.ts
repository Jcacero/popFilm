import { Component, OnInit } from '@angular/core';
import { MultimediaModel } from 'src/app/models/multimediaModel';
import { MultimediaService } from 'src/app/servicios/multimedia.service';

@Component({
  selector: 'app-info-multimedia',
  templateUrl: './info-multimedia.component.html',
  styleUrls: ['./info-multimedia.component.css']
})
export class InfoMultimediaComponent implements OnInit {

  informacionMultimedia: MultimediaModel []

  constructor(private servicioMultimedia:MultimediaService) { }

  ngOnInit(): void {
    this.servicioMultimedia.obtenerMultimedia().subscribe(multimedia=>this.informacionMultimedia=multimedia)
  }

}
