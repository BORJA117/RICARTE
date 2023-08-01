import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { IonicModule } from '@ionic/angular';
import { CuestionarioEMPPageRoutingModule } from './cuestionario-emp-routing.module';
import { CuestionarioEMPPage } from './cuestionario-emp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // Agrega ReactiveFormsModule al arreglo de imports
    CuestionarioEMPPageRoutingModule
  ],
  declarations: [CuestionarioEMPPage]
})
export class CuestionarioEMPPageModule {}
