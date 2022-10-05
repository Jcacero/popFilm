import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';

//componentes
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CarouselComponent } from './crousel/carousel.component';


@NgModule({
  declarations: [
    AutocompleteComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[
    AutocompleteComponent,
    CarouselComponent,
    PrimengModule
  ]
})
export class ComponentsModule { }
