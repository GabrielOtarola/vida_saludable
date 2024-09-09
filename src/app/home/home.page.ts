import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  welcomeMessage: string | null = null;
  menuOpen: boolean = false;

  constructor(private route: ActivatedRoute, private menuCtrl: MenuController) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.welcomeMessage = params['welcome'] ? `Bienvenido, ${params['welcome']}!` : null;
    });
  }

  closeMenu() {
    this.menuCtrl.close();  // Cierra el menú
  }
}
