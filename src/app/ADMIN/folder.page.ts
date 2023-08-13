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
  public passwordFieldType: string = 'password';
  public showPassword: boolean = false;
  public loginError: boolean = false; // Add this line to define loginError

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

    // Llamada al servicio para verificar el inicio de sesión de administrador
    this.dataService.verificarInicioSesionAdmin(this.username, this.password).subscribe(
      (adminUser: Usuario) => {
        if (adminUser) {
          console.log('Inicio de sesión exitoso. Administrador:', adminUser);
          // Redirigir al administrador a la página de opciones de administrador
          this.router.navigateByUrl('/opciones-admin');
        } else {
          console.log('Credenciales de administrador inválidas. Inicio de sesión fallido.');
          this.loginError = true; // Show the error message
        }
      },
      (error) => {
        console.error('Error al verificar el inicio de sesión de administrador:', error);
        this.loginError = true; // Show the error message
      }
    );
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    this.passwordFieldType = this.showPassword ? 'text' : 'password';
  }
}
