import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ModalContentPage } from '../modal-content/modal-content.page';
import { Router } from '@angular/router';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-cuestionario-qr-admin',
  templateUrl: './cuestionario-qr-admin.page.html',
  styleUrls: ['./cuestionario-qr-admin.page.scss'],
})
export class CuestionarioQrAdminPage implements OnInit {
  empleadoForm: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private router: Router
  ) {
    this.empleadoForm = this.formBuilder.group({
      id: [''],
      nombre: [''],
      apellidos: [''],
      empresa: [''],
      correo: [''],
      telefono: [''],
      motivodeingreso: [''],
    });
  }

  ngOnInit() {}

  async onSubmit() {
    const formData = this.empleadoForm.value;

    try {
      const response = await this.http.post<any>('http://localhost:3000/guardar-formulario', formData).toPromise();
      console.log('Datos guardados exitosamente:', response);

      this.presentModal('¡Datos guardados con éxito!');

      const qrData = JSON.stringify(response);
      const qrOptions = {
        errorCorrectionLevel: 'H' as QRCode.QRCodeErrorCorrectionLevel,
      };

      try {
        const qrCodeDataURL = await QRCode.toDataURL(qrData, qrOptions);

        this.router.navigate(['/compartir-qr-admin', { qrCodeDataURL }]);
      } catch (error) {
        console.error('Error al generar el código QR:', error);
      }
    } catch (error) {
      console.error('Error al guardar los datos:', error);
      this.presentModal('¡Error al guardar los datos! Por favor, inténtalo nuevamente.');
    }
  }

  async presentModal(message: string) {
    const modal = await this.modalController.create({
      component: ModalContentPage,
      cssClass: 'modal-content.page.scss',
      componentProps: {
        message: message,
      },
    });

    return await modal.present();
  }
}




       