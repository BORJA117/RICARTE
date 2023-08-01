import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000'; // Cambia la URL para que apunte al servidor local de JSON Server

  constructor(private http: HttpClient) { }

  // Nuevo método para verificar el inicio de sesión en la base de datos MongoDB
  verificarInicioSesion(username: string, password: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/verificar-inicio-sesion`, { username, password });
  }
}
