import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { PrimengModule } from '../primeng/primeng.module';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { CineastasComponent } from './cineastas/cineastas.component';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {CarouselModule} from 'primeng/carousel';
import { InfoMultimediaComponent } from './info-multimedia/info-multimedia.component';


@NgModule({
  declarations: [
    SeriesComponent, 
    CineastasComponent,
    PeliculasComponent,
    InfoMultimediaComponent],
  exports:[
    ComponentsModule,
    PrimengModule,
    SeriesComponent, 
    CineastasComponent,
    PeliculasComponent,
    InfoMultimediaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PrimengModule,
    CardModule,
    DialogModule,
    CarouselModule
  ]
})
export class PagesModule { }
