import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OPCIONESEMPPageRoutingModule } from './opciones-emp-routing.module';

import { OPCIONESEMPPage } from './opciones-emp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OPCIONESEMPPageRoutingModule
  ],
  declarations: [OPCIONESEMPPage]
})
export class OPCIONESEMPPageModule {}
