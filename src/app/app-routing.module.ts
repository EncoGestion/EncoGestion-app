import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'encomienda', loadChildren: () => import('./encomienda/encomienda.module').then(m => m.EncomiendaModule) },
  { path: 'cliente', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule) },
  { path: 'repartidor', loadChildren: () => import('./repartidor/repartidor.module').then(m => m.RepartidorModule) },
  { path: 'paquete', loadChildren: () => import('./paquete/paquete.module').then(m => m.PaqueteModule) },
  { path: 'sobre', loadChildren: () => import('./sobre/sobre.module').then(m => m.SobreModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
