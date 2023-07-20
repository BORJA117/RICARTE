import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrAdminCreadoPageRoutingModule } from './qr-admin-creado-routing.module';

import { QrAdminCreadoPage } from './qr-admin-creado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrAdminCreadoPageRoutingModule
  ],
  declarations: [QrAdminCreadoPage]
})
export class QrAdminCreadoPageModule {}
