import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compartir-qr-admin',
  templateUrl: './compartir-qr-admin.page.html',
  styleUrls: ['./compartir-qr-admin.page.scss'],
})
export class CompartirQRADMINPage implements OnInit {
  qrDataURL: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener los datos del estado de la ruta al inicializar la página
    this.getQRDataURLFromRouteState();
  }

  private getQRDataURLFromRouteState() {
    this.route.paramMap.subscribe((params) => {
      this.qrDataURL = params.get('qrDataURL') || '';
    });
  }
}
