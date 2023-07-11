import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  username: string = '';
  password: string = '';

  constructor() {}

  login() {
    // Aquí puedes agregar la lógica de autenticación
    if (this.username === 'admin' && this.password === 'password') {
      console.log('Inicio de sesión exitoso');
      // Agrega aquí la lógica para redirigir a la página de administración u otras acciones necesarias
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}
