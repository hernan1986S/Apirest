import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';


@NgModule({
  declarations: [
    ListaCursosComponent,
    NuevoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
