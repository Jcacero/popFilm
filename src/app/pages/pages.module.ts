import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { PrimengModule } from '../primeng/primeng.module';

import { SeriesComponent } from './series/series.component';
import { CineastasComponent } from './cineastas/cineastas.component';



@NgModule({
  declarations: [
    SeriesComponent, 
    CineastasComponent,],
  exports:[
    ComponentsModule,
    PrimengModule,
    SeriesComponent, 
    CineastasComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PrimengModule
  ]
})
export class PagesModule { }
