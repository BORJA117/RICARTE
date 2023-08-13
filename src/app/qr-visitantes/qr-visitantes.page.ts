import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';
import { Usuario } from '../interfaces/usuario';
import { LoginStatusService } from '../services/login-status.service'; // Importar el servicio

@Component({
  selector: 'app-qr-visitantes',
  templateUrl: './qr-visitantes.page.html',
  styleUrls: ['./qr-visitantes.page.scss'],
})
export class QRVISITANTESPage implements OnInit {
  
  usuario: Usuario;
  qrData: string;

  constructor(
    private loginStatusService: LoginStatusService // Inyectar el servicio
  ) {
    this.usuario = this.loginStatusService.getLastLoggedInUser() as Usuario || {};

    this.qrData = '';
  }

  ngOnInit() {
    this.generateQR();
  }

  generateQR() {
    if (this.usuario && this.usuario._id) { // Cambia 'id' por la propiedad correcta que almacena el ID en Usuario
      this.qrData = this.usuario._id; // Asigna directamente el ID a qrData
      QRCode.toCanvas(document.getElementById('qr-canvas'), this.qrData); // Generar el QR
    }
  }
}
