import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagenQRPageRoutingModule } from './imagen-qr-routing.module';

import { ImagenQRPage } from './imagen-qr.page';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagenQRPageRoutingModule
  ],
  declarations: [ImagenQRPage]
})
export class ImagenQRPageModule {}
