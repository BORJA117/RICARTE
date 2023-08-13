import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-historial-accesos',
  templateUrl: './historial-accesos.page.html',
  styleUrls: ['./historial-accesos.page.scss'],
})
export class HISTORIALACCESOSPage implements OnInit {
  ingresos: any[] = []; // Aquí almacenaremos los datos de ingresos

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerIngresos(); // Llama a la función para obtener los datos al iniciar la página
  }

  obtenerIngresos() {
    this.http.get<any[]>('http://localhost:3000/obtener-ingresos').subscribe(
      (data) => {
        this.ingresos = data;
      },
      (error) => {
        console.error('Error al obtener los datos de ingresos:', error);
      }
    );
  }

  eliminarRegistro(registroId: string) {
    if (confirm("¿Estás seguro de que deseas eliminar este registro?")) {
      this.http.delete(`http://localhost:3000/eliminar-ingreso/${registroId}`)
        .subscribe(
          () => {
            // Filtrar los ingresos para eliminar el registro eliminado
            this.ingresos = this.ingresos.filter(ingreso => ingreso._id !== registroId);
          },
          (error) => {
            console.error('Error al eliminar el registro:', error);
          }
        );
    }
  }
}
