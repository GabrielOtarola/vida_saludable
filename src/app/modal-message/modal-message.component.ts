import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss'],
})
export class ModalMessageComponent {
  @Input() message: string = ''; // Aseguramos que tenga un valor por defecto

  constructor(private modalCtrl: ModalController) {}

  // Método para cerrar el modal
  dismiss() {
    this.modalCtrl.dismiss();
  }
}
