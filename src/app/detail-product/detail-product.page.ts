import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class DetailProductPage implements OnInit {

  product: any = {
    id: 0,
    name: 'Cargando...',
    price: 0,
    description: '',
    image: ''
  };

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    // Datos simulados
    this.product = {
      id: id,
      name: 'Sofá Modular Gris',
      price: 4500.00,
      description: 'Este cómodo sofá modular se adapta a cualquier espacio. Fabricado con tela de alta resistencia.',
      image: 'https://via.placeholder.com/600x400?text=Sofa+Detalle'
    };
  }

  goBack() {
    this.navCtrl.back();
  }

  viewHistory() {
    console.log('Navegando al historial del producto:', this.product.id);
    this.router.navigate(['/payment-history', this.product.id]);
  }

}