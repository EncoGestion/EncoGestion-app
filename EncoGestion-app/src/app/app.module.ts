import { EncomiendaModule } from './encomienda/encomienda.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ClienteModule } from './cliente/cliente.module';
import { RepartidorModule } from './repartidor/repartidor.module';
import { PaqueteModule } from './paquete/paquete.module';
import { SobreModule } from './sobre/sobre.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    MaterialModule,
    EncomiendaModule,
    PaqueteModule,
    SobreModule,
    ClienteModule,
    RepartidorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
