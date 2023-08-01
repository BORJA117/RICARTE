import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ModalContentPage } from '../modal-content/modal-content.page'; // Importa el componente del modal

@Component({
  selector: 'app-cuestionario-emp',
  templateUrl: './cuestionario-emp.page.html',
  styleUrls: ['./cuestionario-emp.page.scss'],
})
export class CuestionarioEMPPage implements OnInit {
  empleadoForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private modalController: ModalController) {
    // Initialize the form
    this.empleadoForm = this.formBuilder.group({
      id: [''], // If "id" is required, include it in the form
      nombre: [''],
      apellidos: [''],
      empresa: [''],
      username: [''],
      numeroTelefono: [''],
      password: [''],
    });
  }

  ngOnInit() {
    // Implement the ngOnInit() method if you need to execute any logic when the component initializes.
  }

  onSubmit() {
    // Obtiene los datos del formulario
    const formData = this.empleadoForm.value;
  
    // Realiza la solicitud HTTP POST al servidor
    this.http.post<any>('http://localhost:3000/usuarios', formData).subscribe(
      (response) => {
        // La solicitud fue exitosa, maneja la respuesta del servidor aquí si es necesario
        console.log('Datos guardados exitosamente:', response);

        // Muestra la ventana emergente con el mensaje de éxito
        this.presentModal('¡Datos guardados con éxito!');
  
        // Limpia el formulario después de guardar los datos
        this.empleadoForm.reset();
      },
      (error) => {
        // Ocurrió un error al enviar los datos al servidor
        console.error('Error al guardar los datos:', error);

        // Muestra la ventana emergente con el mensaje de error
        this.presentModal('¡Error al guardar los datos! Por favor, inténtalo nuevamente.');
      }
    );
  }

  // Función para mostrar la ventana emergente
  async presentModal(message: string) {
    const modal = await this.modalController.create({
      component: ModalContentPage,
      cssClass: 'modal-content.page.scss', // Puedes crear una clase CSS personalizada para personalizar el estilo de la ventana emergente
      componentProps: {
        message: message
      }
    });
  
    return await modal.present();
  }

}
