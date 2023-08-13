import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar ReactiveFormsModule

import { IonicModule } from '@ionic/angular';

import { CuestionarioQrAdminPageRoutingModule } from './cuestionario-qr-admin-routing.module';

import { CuestionarioQrAdminPage } from './cuestionario-qr-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Agrega ReactiveFormsModule aquí
    IonicModule,
    CuestionarioQrAdminPageRoutingModule
  ],
  declarations: [CuestionarioQrAdminPage]
})
export class CuestionarioQrAdminPageModule {}
