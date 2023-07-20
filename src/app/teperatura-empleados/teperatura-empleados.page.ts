import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teperatura-empleados',
  templateUrl: './teperatura-empleados.page.html',
  styleUrls: ['./teperatura-empleados.page.scss'],
})
export class TeperaturaEmpleadosPage{
  temperatura: string;

  constructor() {
    // Inicializar la temperatura con un valor predeterminado
    this.temperatura = 'temperatura';
  }

  actualizarTemperatura() {
    // Lógica para actualizar la temperatura desde una API o cualquier otra fuente de datos
    // Aquí puedes implementar la lógica para obtener la nueva temperatura y asignarla a this.temperatura
  }
}