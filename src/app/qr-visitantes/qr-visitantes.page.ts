import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-visitantes',
  templateUrl: './qr-visitantes.page.html',
  styleUrls: ['./qr-visitantes.page.scss'],
})
export class QRVISITANTESPage{
  
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