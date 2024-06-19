import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotizadorRoutingModule } from './cotizador-routing.module';
import { CotizadorComponent } from './cotizador.component';
import { RegistroEncomiendaComponent } from './components/registro-encomienda/registro-encomienda.component';


@NgModule({
  declarations: [
    CotizadorComponent,
    RegistroEncomiendaComponent
  ],
  imports: [
    CommonModule,
    CotizadorRoutingModule
  ]
})
export class CotizadorModule { }
