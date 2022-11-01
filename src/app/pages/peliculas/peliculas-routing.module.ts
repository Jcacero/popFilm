import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPeliculasComponent } from './info-peliculas/info-peliculas.component';
import { PeliculasComponent } from './peliculas.component';

const routes: Routes = [
  {path:'',component:PeliculasComponent,
    children:[
      {path:'info-peliculas/:id',component:InfoPeliculasComponent}
    ]    
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
