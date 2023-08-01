import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '/home/borja/Escritorio/RA/myapp/src/app/interfaces/usuario'; // Ajusta la ruta según la ubicación real de la interfaz Usuario

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  cargarDatos(): Observable<Usuario[]> { // Utiliza la interfaz para definir el tipo de retorno del método
    return this.http.get<Usuario[]>('usuarios.json'); // Ajusta la ruta al archivo JSON según su ubicación real
  }
}
