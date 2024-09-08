import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  welcomeMessage: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.setWelcomeMessage();
  }

  setWelcomeMessage() {
    const username = localStorage.getItem('username');
    this.welcomeMessage = username ? `Bienvenido, ${username}` : 'Bienvenido';
  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}
