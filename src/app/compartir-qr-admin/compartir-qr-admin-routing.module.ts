import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompartirQRAdminPage } from './compartir-qr-admin.page';

const routes: Routes = [
  {
    path: '',
    component: CompartirQRAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompartirQRAdminPageRoutingModule {}
