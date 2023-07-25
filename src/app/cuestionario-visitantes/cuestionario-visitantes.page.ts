import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuestionario-visitantes',
  templateUrl: './cuestionario-visitantes.page.html',
  styleUrls: ['./cuestionario-visitantes.page.scss'],
})
export class CuestionarioVisitantesPage {
  nombre: string = ''; // Inicialización con valor predeterminado
  apellidos: string = ''; // Inicialización con valor predeterminado
  empresa: string = ''; // Inicialización con valor predeterminado
  correo: string = ''; // Inicialización con valor predeterminado
  telefono: string = ''; // Inicialización con valor predeterminado
  motivoIngreso: string = ''; // Inicialización con valor predeterminado

  constructor(private router: Router) { }

  // Método para generar el QR y redirigir a la página "imagen-qr"
  generarQR() {
    // Puedes agregar aquí la lógica para generar el QR con los datos del formulario si es necesario

    // Luego, redirige a la página "imagen-qr" y pasa los datos como parámetros en la URL
    this.router.navigate(['/imagen-qr'], {
      queryParams: {
        nombre: this.nombre,
        apellidos: this.apellidos,
        empresa: this.empresa,
        correo: this.correo,
        telefono: this.telefono,
        motivoIngreso: this.motivoIngreso
      }
    });
  }

limpiarCampos() {
  this.nombre = '';
  this.apellidos = '';
  this.empresa = '';
  this.correo = '';
  this.telefono = '';
  this.motivoIngreso = '';
}
}
