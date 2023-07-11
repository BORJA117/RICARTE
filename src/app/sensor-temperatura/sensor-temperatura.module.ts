import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SENSORTEMPERATURAPageRoutingModule } from './sensor-temperatura-routing.module';

import { SENSORTEMPERATURAPage } from './sensor-temperatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SENSORTEMPERATURAPageRoutingModule
  ],
  declarations: [SENSORTEMPERATURAPage]
})
export class SENSORTEMPERATURAPageModule {}
