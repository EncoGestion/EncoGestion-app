import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaqueteComponent } from './paquete.component';

const routes: Routes = [{ path: '', component: PaqueteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaqueteRoutingModule { }
