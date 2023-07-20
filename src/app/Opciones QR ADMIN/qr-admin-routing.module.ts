import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRADMINPage } from './qr-admin.page';

const routes: Routes = [
  {
    path: '',
    component: QRADMINPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRADMINPageRoutingModule {}
