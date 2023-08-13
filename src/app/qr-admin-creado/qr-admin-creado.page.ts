import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-qr-admin-creado',
  templateUrl: './qr-admin-creado.page.html',
  styleUrls: ['./qr-admin-creado.page.scss'],
})

export class QrAdminCreadoPage implements OnInit {
  usuario: Usuario;
  qrData: string; // Contenido del QR

  constructor() {
    this.usuario = JSON.parse(localStorage.getItem('usuario') || '{}'); // Asigna un objeto vacío si no hay usuario
    this.qrData = '';
  }

  ngOnInit() {
    this.generateQR();
  }

  generateQR() {
    // Genera el contenido del QR con el ID del usuario
    if (this.usuario && this.usuario._id) {
      this.qrData = this.usuario._id; // Asigna directamente el ID a qrData
      QRCode.toCanvas(document.getElementById('qr-canvas'), this.qrData); // Genera el QR en un elemento HTML
    }
  }
}
