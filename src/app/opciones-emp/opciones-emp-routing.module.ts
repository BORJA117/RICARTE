import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OPCIONESEMPPage } from './opciones-emp.page';

const routes: Routes = [
  {
    path: '',
    component: OPCIONESEMPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OPCIONESEMPPageRoutingModule {}
