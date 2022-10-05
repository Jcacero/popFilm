import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modulos de prime ng
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'primeng/api';
import {FormsModule} from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TabViewModule} from 'primeng/tabview';
import {CarouselModule} from 'primeng/carousel';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SharedModule,
    AutoCompleteModule,
    FormsModule,
    TabViewModule,
    CarouselModule

  ],
  exports:[
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SharedModule,
    AutoCompleteModule,
    FormsModule,
    TabViewModule,
    CarouselModule
  ]
})
export class PrimengModule { }
