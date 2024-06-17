import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaqueteRoutingModule } from './paquete-routing.module';
import { PaqueteComponent } from './paquete.component';


@NgModule({
  declarations: [
    PaqueteComponent
  ],
  imports: [
    CommonModule,
    PaqueteRoutingModule
  ]
})
export class PaqueteModule { }
