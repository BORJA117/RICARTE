import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CompartirQRAdminPageRoutingModule } from './compartir-qr-admin-routing.module';
import { CompartirQRAdminPage } from './compartir-qr-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompartirQRAdminPageRoutingModule
  ],
  declarations: [CompartirQRAdminPage]
})
export class CompartirQRAdminPageModule {}
