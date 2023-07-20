import{ Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public username: string;
  public password: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  login() {
    // Aquí puedes agregar la lógica para validar el inicio de sesión
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
  }
}