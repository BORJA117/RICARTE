import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompartirQRADMINPageRoutingModule } from './compartir-qr-admin-routing.module';

import { CompartirQRADMINPage } from './compartir-qr-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompartirQRADMINPageRoutingModule
  ],
  declarations: [CompartirQRADMINPage]
})
export class CompartirQRADMINPageModule {}
