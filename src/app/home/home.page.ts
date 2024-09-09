import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
>>>>>>> Sebastian

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
<<<<<<< HEAD
  welcomeMessage: string = '';
  isLoggedIn: boolean = false;

  constructor(
    private router: Router
  ) { }
=======
  welcomeMessage: string | null = null;
  menuOpen: boolean = false;

  constructor(private route: ActivatedRoute, private menuCtrl: MenuController) {}
>>>>>>> Sebastian

  ngOnInit() {
    this.setWelcomeMessage();
  }

<<<<<<< HEAD
  setWelcomeMessage() {
    const username = localStorage.getItem('username');
    this.isLoggedIn = !!username;
    this.welcomeMessage = username ? `Bienvenido, ${username}` : 'Bienvenido';
  }

  logout() {
    localStorage.removeItem('username');
    this.isLoggedIn = false; // Cambiamos el estado de login
    this.welcomeMessage = 'Bienvenido'; // Reseteamos el mensaje de bienvenida
  }

  goToLogin() {
    this.router.navigate(['/login']);
=======
  closeMenu() {
    this.menuCtrl.close();  // Cierra el menú
>>>>>>> Sebastian
  }
}
