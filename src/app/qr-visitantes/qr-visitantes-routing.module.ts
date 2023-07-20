import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRVISITANTESPage } from './qr-visitantes.page';

const routes: Routes = [
  {
    path: '',
    component: QRVISITANTESPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRVISITANTESPageRoutingModule {}
