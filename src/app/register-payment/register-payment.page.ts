import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-payment',
  templateUrl: './register-payment.page.html',
  styleUrls: ['./register-payment.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class RegisterPaymentPage implements OnInit {

  // Datos del pago
  paymentData = {
    amount: null,
    date: new Date().toISOString() // Fecha actual por defecto
  };

  // Datos simulados del contexto (Cliente y Producto)
  contextData = {
    clientName: 'Juan Pérez',
    productName: 'Sofá Modular Gris',
    totalDebt: 4500.00,
    remainingDebt: 2500.00
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    // Regresamos al catálogo por ahora (o a donde prefieras)
    this.router.navigate(['/catalog']);
  }

  savePayment() {
    if (this.paymentData.amount && this.paymentData.amount > 0) {
      console.log('Registrando abono:', this.paymentData);
      console.log('Para:', this.contextData);
      
      // Aquí iría la llamada a la API REST para guardar el abono
      
      // Simulamos éxito y volvemos
      alert('¡Abono registrado con éxito!');
      this.goBack();
    } else {
      alert('Por favor ingresa un monto válido');
    }
  }

}