import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncomiendaRoutingModule } from './encomienda-routing.module';
import { EncomiendaComponent } from './encomienda.component';
import { RegistroEncomiendaComponent } from './components/registro-encomienda/registro-encomienda.component';


@NgModule({
  declarations: [
    EncomiendaComponent,
    RegistroEncomiendaComponent
  ],
  imports: [
    CommonModule,
    EncomiendaRoutingModule
  ]
})
export class EncomiendaModule { }
