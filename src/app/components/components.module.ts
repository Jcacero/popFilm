import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[
    AutocompleteComponent,
    PrimengModule
  ]
})
export class ComponentsModule { }
