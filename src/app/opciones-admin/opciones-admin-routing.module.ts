import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OPCIONESADMINPage } from './opciones-admin.page';

const routes: Routes = [
  {
    path: '',
    component: OPCIONESADMINPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OPCIONESADMINPageRoutingModule {}
