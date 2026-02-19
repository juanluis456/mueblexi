import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular'; // 1. Importamos NavController
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.page.html',
  styleUrls: ['./payment-history.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class PaymentHistoryPage implements OnInit {

  productName: string = 'Cargando...';
  
  payments = [
    { date: '2024-02-01', amount: 500.00 },
    { date: '2024-02-15', amount: 500.00 },
    { date: '2024-03-01', amount: 600.00 },
    { date: '2024-03-15', amount: 400.00 }
  ];

  totalPaid: number = 0;

  // 2. Inyectamos NavController en lugar de Router para la navegación hacia atrás
  constructor(
    private route: ActivatedRoute, 
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.productName = 'Sofá Modular Gris'; 

    this.totalPaid = this.payments.reduce((sum, current) => sum + current.amount, 0);
  }

  goBack() {
    // 3. Usamos la forma correcta de volver atrás en Ionic
    this.navCtrl.back();
  }

}