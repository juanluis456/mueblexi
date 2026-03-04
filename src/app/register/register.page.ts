import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// 1. IMPORTANTE: Importar RouterModule para que funcionen los enlaces
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  // 2. IMPORTANTE: Agregar RouterModule a la lista de imports aquí abajo
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class RegisterPage {
  userData = {
    nombre: '',
    correo: '',
    password: '',
    rol: 'cliente'
  };

  constructor(private router: Router) {}

  register() {
    console.log('Datos de registro:', this.userData);
    if (this.userData.nombre && this.userData.correo && this.userData.password) {
      console.log('Usuario registrado localmente');
      this.router.navigate(['/home']);
    } else {
      console.log('Por favor completa todos los campos');
    }
  }
}