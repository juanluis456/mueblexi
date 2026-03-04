import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para [(ngModel)]
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule] // FormsModule es clave aquí
})
export class RegisterPage {
  // Aquí definimos userData para que el HTML no de error
  userData = {
    nombre: '',
    correo: '',
    password: '',
    rol: 'comprador' // Valor por defecto para el ion-segment
  };

  constructor(private apiService: ApiService, private router: Router) {}

  // Aquí definimos la función register que busca el (click) del HTML
  register() {
    if (!this.userData.nombre || !this.userData.correo || !this.userData.password) {
      alert('Por favor, rellena todos los campos');
      return;
    }

    this.apiService.registrarUsuario(this.userData).subscribe({
      next: (res) => {
        alert('Registro exitoso');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert('Error al registrar usuario');
      }
    });
  }
}