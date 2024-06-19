import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'calendario', loadChildren: () => import('./calendario/calendario.module').then(m => m.CalendarioModule) },
  { path: 'cotizador', loadChildren: () => import('./cotizador/cotizador.module').then(m => m.CotizadorModule) },
  { path: 'entregas', loadChildren: () => import('./entregas/entregas.module').then(m => m.EntregasModule) },
  { path: 'nosotros', loadChildren: () => import('./nosotros/nosotros.module').then(m => m.NosotrosModule) },
  { path: 'cuenta', loadChildren: () => import('./cuenta/cuenta.module').then(m => m.CuentaModule) },
  { path: 'seguimiento', loadChildren: () => import('./seguimiento/seguimiento.module').then(m => m.SeguimientoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
