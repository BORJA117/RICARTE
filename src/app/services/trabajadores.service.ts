import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {
  private apiUrl = 'http://localhost:3000'; // Cambia la URL para que apunte al archivo JSON de trabajadores

  constructor(private http: HttpClient) { }

  cargarTrabajadores() {
    return this.http.get<Usuario[]>(`${this.apiUrl}/trabajadores`);
  }
}
