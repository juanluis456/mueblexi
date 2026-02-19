import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class HomePage {
  credentials = {
    email: '',
    password: ''
  };

  // Inyectamos el 'Router' para poder navegar
  constructor(private router: Router) {}

  login() {
    // Validamos que haya escrito algo (simulación)
    if (this.credentials.email && this.credentials.password) {
      
      console.log('Credenciales correctas, entrando...');
      
      // --- ESTA ES LA LÍNEA QUE FALTABA ---
      // Redirige al usuario a la ruta '/catalog'
      this.router.navigate(['/catalog']); 
      
    } else {
      console.log('Por favor ingresa correo y contraseña');
    }
  }
}