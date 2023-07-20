import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuestionarioEMPPageRoutingModule } from './cuestionario-emp-routing.module';

import { CuestionarioEMPPage } from './cuestionario-emp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuestionarioEMPPageRoutingModule
  ],
  declarations: [CuestionarioEMPPage]
})
export class CuestionarioEMPPageModule {}
