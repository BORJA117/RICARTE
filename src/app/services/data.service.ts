import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  cargarDatos() {
    return this.http.get<{ usuarios: Usuario[] }>(this.apiUrl);
  }
}
