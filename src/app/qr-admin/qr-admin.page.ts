import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-admin',
  templateUrl: './qr-admin.page.html',
  styleUrls: ['./qr-admin.page.scss'],
})
export class QRADMINPage implements OnInit {
  temperatura: string;

  constructor() {
    // Inicializar la temperatura con un valor predeterminado
    this.temperatura = '25°C';
  }

  ngOnInit() {
  }

  actualizarTemperatura() {
    // Lógica para actualizar la temperatura desde una API o cualquier otra fuente de datos
    // Aquí puedes implementar la lógica para obtener la nueva temperatura y asignarla a this.temperatura
  }
}
