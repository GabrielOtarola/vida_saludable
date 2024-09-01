import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]],
      confirmPassword: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      height: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      weight: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      gender: ['', Validators.required],
      activityLevel: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
  }

  // Validador para la contraseña
  passwordValidator(control: FormControl) {
    const value = control.value;
    if (!value) {
      return null;
    }
    const hasFourDigits = (value.match(/\d/g) || []).length >= 4;
    const hasThreeLetters = (value.match(/[a-zA-Z]/g) || []).length >= 3;
    const hasOneUpperCase = /[A-Z]/.test(value);
    const isValidLength = value.length >= 8;

    return hasFourDigits && hasThreeLetters && hasOneUpperCase && isValidLength ? null : { invalidPassword: true };
  }

  // Validador para que las contraseñas coincidan
  passwordMatchValidator(frm: FormGroup) {
    return frm.get('password')?.value === frm.get('confirmPassword')?.value ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const username = this.registerForm.get('username')?.value;
      this.router.navigate(['/home'], { queryParams: { welcome: username } });
    } else {
      console.log('Formulario inválido');
      console.log(this.registerForm.errors); // Verificar errores del formulario
    }
  }
}
