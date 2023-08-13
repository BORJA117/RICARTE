import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  verificarInicioSesion(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/verificar-inicio-sesion`, { username, password });
  }

  verificarInicioSesionAdmin(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/verificar-inicio-sesion-admin`, { username, password });
  }

  obtenerUltimoFormulario(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/obtener-ultimo-formulario`);
  }

  obtenerFormularioPorId(formularioId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/obtener-formulario/${formularioId}`);
  }

  obtenerDatosTemperaturaHumedad(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/obtener-datos-temperatura-humedad`);
  }
  
}
