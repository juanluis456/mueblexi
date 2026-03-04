import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router'; // Importamos Router y RouterModule

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class CatalogPage implements OnInit {

  // Lista completa de 4 productos simulados
  products = [
    {
      id: 1,
      name: 'Sofá Modular Gris',
      price: 4500.00,
      image: 'https://via.placeholder.com/300x200?text=Sofa+Gris'
    },
    {
      id: 2,
      name: 'Mesa de Centro Madera',
      price: 1200.50,
      image: 'https://via.placeholder.com/300x200?text=Mesa+Madera'
    },
    {
      id: 3,
      name: 'Sillón Reclinable',
      price: 3800.00,
      image: 'https://via.placeholder.com/300x200?text=Sillon'
    },
    {
      id: 4,
      name: 'Comedor 4 Sillas',
      price: 5600.00,
      image: 'https://via.placeholder.com/300x200?text=Comedor'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Función para cerrar sesión
  logout() {
    this.router.navigate(['/home']);
  }

  // Función para ir al detalle (CORREGIDA)
  viewDetail(product: any) {
    console.log('Navegando al detalle de:', product.name);
    // IMPORTANTE: Esta línea envía al usuario a la pantalla de detalle con el ID
    this.router.navigate(['/detail-product', product.id]);
  }

}