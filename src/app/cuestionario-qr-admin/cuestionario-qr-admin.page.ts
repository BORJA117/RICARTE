import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import * as QRCode from 'qrcode';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cuestionario-qr-admin',
  templateUrl: './cuestionario-qr-admin.page.html',
  styleUrls: ['./cuestionario-qr-admin.page.scss'],
})
export class CuestionarioQrAdminPage implements AfterViewInit {
  // Datos del formulario para el código QR
  public formData = {
    nombre: '',
    apellidos: '',
    correo: '',
  };

  @ViewChild('qrCanvas', { static: false }) qrCanvas?: ElementRef;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngAfterViewInit() {
    // No generamos el código QR automáticamente al cargar la página
  }

  generarQR() {
    const datosTexto = `${this.formData.nombre} ${this.formData.apellidos}\n${this.formData.correo}`;

    QRCode.toCanvas(this.qrCanvas?.nativeElement, datosTexto, {
      width: 150,
    }, (error) => {
      if (error) {
        console.error('Error generando el código QR:', error);
      } else {
        console.log('Código QR generado con éxito.');

        // Navegar a la página 'compartir-qr-admin' y pasar el código QR generado como parámetro
        const qrDataURL = this.qrCanvas?.nativeElement.toDataURL();
        this.router.navigate(['/compartir-qr-admin', { qrDataURL }]);
      }
    });
  }
}
