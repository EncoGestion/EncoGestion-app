import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncomiendaComponent } from './encomienda.component';
import { RegistroEncomiendaComponent } from './components/registro-encomienda/registro-encomienda.component';

const routes: Routes = [
  { path: '', component: EncomiendaComponent },
  { path: 'registro', component: RegistroEncomiendaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncomiendaRoutingModule { }
