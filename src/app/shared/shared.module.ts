import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from '../primeng/primeng.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    PrimengModule
  ]
})
export class SharedModule { }
