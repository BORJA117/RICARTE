import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HISTORIALACCESOSPageRoutingModule } from './historial-accesos-routing.module';

import { HISTORIALACCESOSPage } from './historial-accesos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HISTORIALACCESOSPageRoutingModule
  ],
  declarations: [HISTORIALACCESOSPage]
})
export class HISTORIALACCESOSPageModule {}
