import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRVISITANTESPageRoutingModule } from './qr-visitantes-routing.module';

import { QRVISITANTESPage } from './qr-visitantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRVISITANTESPageRoutingModule
  ],
  declarations: [QRVISITANTESPage]
})
export class QRVISITANTESPageModule {}
