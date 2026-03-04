import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class LoginPage {
  
  // Variables para guardar lo que el usuario escribe
  credenciales = {
    correo: '',
    password: ''
  };

  // Inyectamos el router (para cambiar de pantalla) y el apiService (para conectar con Python)
  constructor(private router: Router, private apiService: ApiService) {}

  // Función que se ejecuta al darle clic a "ENTRAR"
  login() {
    // PASO 1: Validar que los campos no estén vacíos
    if (!this.credenciales.correo || !this.credenciales.password) {
      alert('Por favor, escribe tu correo y contraseña');
      return;
    }

    console.log('Consultando a la base de datos de MongoDB...');

    // PASO 2: Llamar al servicio que conecta con Python
    this.apiService.loginUsuario(this.credenciales).subscribe({
      next: (res) => {
        // SI PYTHON RESPONDE 200 (OK):
        console.log('Usuario validado con éxito', res);
        alert('¡Bienvenido!');
        
        // Te manda directo a ver los productos
        this.router.navigate(['/catalog']); 
      },
      error: (err) => {
        // SI PYTHON RESPONDE 401, 404 o 500 (ERROR):
        console.error('Error desde el servidor:', err);
        
        // BLOQUEO: Si pones cualquier letra falsa, entrará aquí:
        alert('ERROR: Cuenta no registrada o datos incorrectos');
      }
    });
  }

} // <--- Esta es la llave que probablemente te faltaba y rompía todo