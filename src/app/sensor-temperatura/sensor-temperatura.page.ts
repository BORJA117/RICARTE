import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sensor-temperatura',
  templateUrl: './sensor-temperatura.page.html',
  styleUrls: ['./sensor-temperatura.page.scss'],
})
export class SENSORTEMPERATURAPage implements OnInit {
  temperatura: number;
  humedad: number;

  constructor(private http: HttpClient) {
    this.temperatura = 0;
    this.humedad = 0;
  }

  ngOnInit() {
    console.log("Inicializando componente");
    this.actualizarTemperatura();
  }

  actualizarTemperatura() {
    console.log("Obteniendo datos...");
    this.http.get<any>('http://localhost:3000/obtener-datos-temperatura-humedad').subscribe(
      (data) => {
        console.log("Datos recibidos:", data);
        this.temperatura = data.Temperatura;
        this.humedad = data.Humedad;
      },
      (error) => {
        console.error('Error al obtener los datos de temperatura y humedad:', error);
      }
    );
  }
}
