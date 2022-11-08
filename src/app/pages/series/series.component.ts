import { Component, OnInit } from '@angular/core';
import { Series } from 'src/app/models/series';
import { SeriesService } from 'src/app/servicios/series.service';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  arregloSeries:Series [];

  constructor(private servicioSeries:SeriesService) { 
    this.servicioSeries.obtenerSeries().subscribe(series=>
      this.arregloSeries=series)
  }

  ngOnInit(): void {
  }
}
