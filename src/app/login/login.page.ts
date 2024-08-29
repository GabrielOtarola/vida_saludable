import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials = {
    email: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit() { }

  onLogin() {
    const { email, password } = this.credentials;

    // Aquí puedes agregar la lógica de autenticación, por ejemplo, llamando a un servicio
    if (email === 'test@example.com' && password === '123456') {
      // Si la autenticación es exitosa, navega a la página principal
      this.router.navigateByUrl('/home', { replaceUrl: true });
    } else {
      // Si las credenciales no son válidas, muestra un mensaje de error
      alert('Credenciales incorrectas');
    }
  }

}
