import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuestionarioQrAdminPage } from './cuestionario-qr-admin.page';

const routes: Routes = [
  {
    path: '',
    component: CuestionarioQrAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuestionarioQrAdminPageRoutingModule {}
