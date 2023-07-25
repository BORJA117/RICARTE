import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as QRCode from 'qrcode'; // Importar la biblioteca qrcode

@Component({
  selector: 'app-imagen-qr',
  templateUrl: './imagen-qr.page.html',
  styleUrls: ['./imagen-qr.page.scss'],
})
export class ImagenQRPage {
  qrData: string = '';
  qrImageUrl: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.qrData = JSON.stringify(params); // Obtener los datos enviados desde la página anterior
      this.generateQR(); // Llamar al método para generar el QR
    });
  }

  // Método para generar el QR a partir de los datos
  generateQR() {
    QRCode.toDataURL(this.qrData, (err, url) => {
      if (err) {
        console.error('Error generando el QR', err);
      } else {
        this.qrImageUrl = url; // Asignar la URL de la imagen QR generada a la propiedad qrImageUrl
      }
    });
  }
}
