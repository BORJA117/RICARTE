import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public username: string;
  public password: string;
  public passwordFieldType: string = 'password'; // Agrega esta propiedad
  public showPassword: boolean = false; // Agrega esta propiedad

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  login() {
    console.log('Datos del formulario:', this.username, this.password);

    // Llamada al servicio para verificar el inicio de sesión en la base de datos MongoDB
    this.dataService.verificarInicioSesion(this.username, this.password).subscribe(
      (user: Usuario) => {
        if (user) {
          console.log('Inicio de sesión exitoso. Usuario:', user);
          // Redirigir al usuario a la página de opciones de administrador
          this.router.navigateByUrl('/opciones-admin');
        } else {
          console.log('Credenciales inválidas. Inicio de sesión fallido.');
        }
      },
      (error) => {
        console.error('Error al verificar el inicio de sesión:', error);
      }
    );
  }

  // Agrega esta función para mostrar/ocultar la contraseña
  togglePassword() {
    this.showPassword = !this.showPassword;
    this.passwordFieldType = this.showPassword ? 'text' : 'password';
  }
}
