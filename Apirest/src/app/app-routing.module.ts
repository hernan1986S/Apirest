import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { InicioComponent } from './core/components/inicio/inicio.component';

const routes: Routes = [
  {path: 'inicio' , component: InicioComponent},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'curso',
    loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule)
  },
  {path: '', redirectTo: 'inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
