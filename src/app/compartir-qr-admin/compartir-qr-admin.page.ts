import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';
import { DataService } from '../services/data.service'; // Asegúrate de tener la ruta correcta a tu servicio DataService
import { Formulario } from '../interfaces/formulario'; // Asegúrate de tener la ruta correcta a tu modelo Formulario

@Component({
  selector: 'app-compartir-qr-admin',
  templateUrl: './compartir-qr-admin.page.html',
  styleUrls: ['./compartir-qr-admin.page.scss'],
})
export class CompartirQRAdminPage implements OnInit {
  qrDataURL: string = '';

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.obtenerUltimoFormulario().subscribe(
      (ultimoFormulario: Formulario) => {
        if (ultimoFormulario) {
          const contenidoQR = ultimoFormulario._id; // Asigna directamente el ID a contenidoQR
          console.log('Contenido del QR:', contenidoQR); // Agregar este console.log
          QRCode.toDataURL(contenidoQR, (err, codigoQR) => {
            if (err) {
              console.error('Error al generar el código QR:', err);
              return;
            }
            this.qrDataURL = codigoQR;
            console.log('URL del QR:', this.qrDataURL); // Agregar este console.log
          });
        }
      },
      (error) => {
        console.error('Error al obtener el último formulario:', error);
      }
    );
  }

  descargarQR() {
    if (this.qrDataURL) {
      const link = document.createElement('a');
      link.href = this.qrDataURL;
      link.download = 'codigo-qr.png'; // Nombre del archivo a descargar
      link.click();
    }
  }
}
