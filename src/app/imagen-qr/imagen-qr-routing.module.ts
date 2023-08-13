import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ImagenQRPage } from './imagen-qr.page';

const routes: Routes = [
  {
    path: '',
    component: ImagenQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagenQRPageRoutingModule {}
