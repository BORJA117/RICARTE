import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRADMINPageRoutingModule } from './qr-admin-routing.module';

import { QRADMINPage } from './qr-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRADMINPageRoutingModule
  ],
  declarations: [QRADMINPage]
})
export class QRADMINPageModule {}
