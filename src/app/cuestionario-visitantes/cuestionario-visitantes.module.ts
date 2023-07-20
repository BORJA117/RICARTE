import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CUESTIONARIOVISITANTESPageRoutingModule } from './cuestionario-visitantes-routing.module';

import { CUESTIONARIOVISITANTESPage } from './cuestionario-visitantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CUESTIONARIOVISITANTESPageRoutingModule
  ],
  declarations: [CUESTIONARIOVISITANTESPage]
})
export class CUESTIONARIOVISITANTESPageModule {}
