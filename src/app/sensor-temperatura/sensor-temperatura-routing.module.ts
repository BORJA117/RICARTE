import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SENSORTEMPERATURAPage } from './sensor-temperatura.page';

const routes: Routes = [
  {
    path: '',
    component: SENSORTEMPERATURAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SENSORTEMPERATURAPageRoutingModule {}
