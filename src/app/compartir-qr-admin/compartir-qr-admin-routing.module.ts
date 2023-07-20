import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompartirQRADMINPage } from './compartir-qr-admin.page';

const routes: Routes = [
  {
    path: '',
    component: CompartirQRADMINPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompartirQRADMINPageRoutingModule {}
