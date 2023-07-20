import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuestionarioQrAdminPageRoutingModule } from './cuestionario-qr-admin-routing.module';

import { CuestionarioQrAdminPage } from './cuestionario-qr-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuestionarioQrAdminPageRoutingModule
  ],
  declarations: [CuestionarioQrAdminPage]
})
export class CuestionarioQrAdminPageModule {}
