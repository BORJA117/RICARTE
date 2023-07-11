import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compartir-qr-admin',
  templateUrl: './compartir-qr-admin.page.html',
  styleUrls: ['./compartir-qr-admin.page.scss'],
})
export class CompartirQRADMINPage {
  nombre: string;

  constructor() {
    // Inicializar la temperatura con un valor predeterminado
    this.nombre = 'Nombre del usuario';
  }

  actualizarNombre() {
    // Lógica para actualizar la temperatura desde una API o cualquier otra fuente de datos
    // Aquí puedes implementar la lógica para obtener la nueva temperatura y asignarla a this.temperatura
  }
}