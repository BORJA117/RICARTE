import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen-qr',
  templateUrl: './imagen-qr.page.html',
  styleUrls: ['./imagen-qr.page.scss'],
})
export class ImagenQRPage{

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