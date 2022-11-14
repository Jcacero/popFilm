import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';

//componentes
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CarouselComponent } from './crousel/carousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltroComponent } from './filtro/filtro.component';


@NgModule({
  declarations: [
    AutocompleteComponent,
    CarouselComponent,
    FiltroComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    AutocompleteComponent,
    CarouselComponent,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ComponentsModule { }
