import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeperaturaEmpleadosPageRoutingModule } from './teperatura-empleados-routing.module';

import { TeperaturaEmpleadosPage } from './teperatura-empleados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeperaturaEmpleadosPageRoutingModule
  ],
  declarations: [TeperaturaEmpleadosPage]
})
export class TeperaturaEmpleadosPageModule {}
