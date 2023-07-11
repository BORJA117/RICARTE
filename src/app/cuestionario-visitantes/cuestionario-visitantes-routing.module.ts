import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CUESTIONARIOVISITANTESPage } from './cuestionario-visitantes.page';

const routes: Routes = [
  {
    path: '',
    component: CUESTIONARIOVISITANTESPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CUESTIONARIOVISITANTESPageRoutingModule {}
