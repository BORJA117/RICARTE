import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ModalContentPage } from './modal-content.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [ModalContentPage],
  exports: [ModalContentPage]
})
export class ModalContentPageModule {}
