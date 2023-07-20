import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrAdminCreadoPage } from './qr-admin-creado.page';

const routes: Routes = [
  {
    path: '',
    component: QrAdminCreadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrAdminCreadoPageRoutingModule {}
