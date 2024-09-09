import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {
  recoverForm: FormGroup; // Declaración de recoverForm

  constructor(private formBuilder: FormBuilder) {
    // Inicializa recoverForm en el constructor
    this.recoverForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]] // Valida el correo
    });
  }

  ngOnInit() {
    // Puedes añadir lógica adicional aquí si es necesario, pero recoverForm ya está inicializado en el constructor
  }

  onSubmit() {
    if (this.recoverForm.valid) {
      const email = this.recoverForm.value.email;
      console.log(`Correo de recuperación enviado a: ${email}`);
      // Aquí puedes añadir la lógica para enviar el correo de recuperación
    }
  }
}
