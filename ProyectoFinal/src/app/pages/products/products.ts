import { Component } from '@angular/core';
import { Product, Products } from '../../services/products';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Productos {
  productos: Product[] = [];

  constructor(private product: Products) {
    // Inicializamos los productos y añadimos la propiedad para controlar el estado
    this.productos = this.product.getProducts().map(p => ({
      ...p,
      mostrarDescripcionCompleta: false
    }));
  }

  // Método para alternar la descripción completa
  toggleDescripcion(producto: Product): void {
    producto.mostrarDescripcionCompleta = !producto.mostrarDescripcionCompleta;
  }
}