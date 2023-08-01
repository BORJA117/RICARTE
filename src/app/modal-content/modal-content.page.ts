import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.page.html',
  styleUrls: ['./modal-content.page.scss'],
})
export class ModalContentPage {
 // ... (código anterior)

// Declarar la propiedad 'message' con valor por defecto
@Input() message: string = '';

// ... (código posterior)

  

  constructor(private modalController: ModalController) {}

  close() {
    this.modalController.dismiss();
    
  }
}
