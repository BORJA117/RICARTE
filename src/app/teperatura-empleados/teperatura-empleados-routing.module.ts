import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeperaturaEmpleadosPage } from './teperatura-empleados.page';

const routes: Routes = [
  {
    path: '',
    component: TeperaturaEmpleadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeperaturaEmpleadosPageRoutingModule {}
