import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuestionarioEMPPage } from './cuestionario-emp.page';

const routes: Routes = [
  {
    path: '',
    component: CuestionarioEMPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuestionarioEMPPageRoutingModule {}
