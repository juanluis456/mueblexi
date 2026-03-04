import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // <--- ESTO FALTA PARA EL NGMODEL

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule] // <--- AGREGADO AQUÍ TAMBIÉN
})
export class HomePage {
  // Creamos el objeto que pide tu HTML para que no de error
  credentials = {
    email: '',
    password: ''
  };

  constructor() {}

  // La función que pide el botón de tu HTML
  login() {
    console.log('Login presionado', this.credentials);
  }
}