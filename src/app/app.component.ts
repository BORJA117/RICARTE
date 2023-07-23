import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    

    { title: 'ADMIN', url: '/folder/inbox', icon: 'home' },
    { title: 'TRABAJADORES', url: '/home', icon: 'people' },
    { title: 'VISITANTES', url: '/customers', icon: 'people' },


  ];
  
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
