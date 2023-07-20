import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OPCIONESADMINPageRoutingModule } from './opciones-admin-routing.module';

import { OPCIONESADMINPage } from './opciones-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OPCIONESADMINPageRoutingModule
  ],
  declarations: [OPCIONESADMINPage]
})
export class OPCIONESADMINPageModule {}
