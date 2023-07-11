import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QREMPPage } from './qr-emp.page';

const routes: Routes = [
  {
    path: '',
    component: QREMPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QREMPPageRoutingModule {}
