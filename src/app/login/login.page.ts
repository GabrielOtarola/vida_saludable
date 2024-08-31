import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, this.passwordValidator]]
    });
  }

  passwordValidator(control: any) {
    const value = control.value;
    const hasNumber = /\d/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasMinLength = value.length >= 7;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    if (!(hasNumber && hasUpper && hasMinLength && hasSpecialChar)) {
      return { passwordStrength: true };
    }
    return null;
  }

  navigateToHome() {
    this.navCtrl.navigateForward('/home', { animated: true, animationDirection: 'forward' });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario válido:', this.loginForm.value);
      this.navigateToHome();
    } else {
      console.log('Formulario inválido');
    }
  }
}
