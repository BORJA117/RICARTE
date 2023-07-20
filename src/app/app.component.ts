import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    

    { title: 'Administrador', url: '/folder/inbox', icon: 'person' },
    { title: 'Empleados', url: '/home', icon: 'people' },
    { title: 'Recepción', url: '/customers', icon: 'people' },


  ];
  
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
