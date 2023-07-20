import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HISTORIALACCESOSPage } from './historial-accesos.page';

const routes: Routes = [
  {
    path: '',
    component: HISTORIALACCESOSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HISTORIALACCESOSPageRoutingModule {}
