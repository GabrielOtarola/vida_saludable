import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ModalController } from '@ionic/angular';
import { ModalMessageComponent } from '../modal-message/modal-message.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

<<<<<<< HEAD
  onSubmit() {
    if (this.loginForm.valid) {
      const { username } = this.loginForm.value;

      // Aquí debes realizar la lógica de autenticación
      // Supongamos que la autenticación es exitosa

      localStorage.setItem('username', username); // Guardar el nombre de usuario en el almacenamiento local
=======
  // Validador de contraseña
  passwordValidator(control: any) {
    const value = control.value;
    const hasNumber = /\d/.test(value); // Debe tener al menos un número
    const hasUpper = /[A-Z]/.test(value); // Debe tener al menos una mayúscula
    const hasMinLength = value.length >= 7; // Longitud mínima de 7 caracteres
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value); // Al menos un carácter especial

    if (!(hasNumber && hasUpper && hasMinLength && hasSpecialChar)) {
      return { passwordStrength: true }; // Devuelve un error si la validación falla
    }
    return null; // No hay errores
  }

  // Mostrar el modal con un mensaje
  async showModal(message: string) {
    const modal = await this.modalCtrl.create({
      component: ModalMessageComponent,
      componentProps: { message }
    });
    return await modal.present();
  }

  // Método para limpiar campos
  clearField(field: string) {
    this.loginForm.get(field)?.reset(); // Limpia el campo especificado
  }

  // Acción al enviar el formulario
  async onSubmit() {
    const password = this.loginForm.get('password')?.value;
    const passwordValid = this.validatePassword(password); // Validar la contraseña

    if (!passwordValid) {
      await this.showModal('La contraseña debe tener al menos 4 números, 3 caracteres especiales y 1 mayúscula.');
    } else if (this.loginForm.valid) {
      // Navegar al home si todo es válido
>>>>>>> Sebastian
      this.navCtrl.navigateForward('/home');
    } else {
      // Si el formulario es inválido, mostrar el modal con un mensaje de error
      await this.showModal('El formulario es inválido.');
    }
  }

  // Validación personalizada de la contraseña
  validatePassword(password: string): boolean {
    const hasNumber = (password.match(/\d/g) || []).length >= 4; // Al menos 4 números
    const hasUpperCase = /[A-Z]/.test(password); // Al menos una mayúscula
    const hasSpecialChar = (password.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length >= 3; // Al menos 3 caracteres especiales
    return hasNumber && hasUpperCase && hasSpecialChar; // Devuelve verdadero si es válido
  }
}
