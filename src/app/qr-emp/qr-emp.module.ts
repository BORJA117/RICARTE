import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QREMPPageRoutingModule } from './qr-emp-routing.module';

import { QREMPPage } from './qr-emp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QREMPPageRoutingModule
  ],
  declarations: [QREMPPage]
})
export class QREMPPageModule {}
