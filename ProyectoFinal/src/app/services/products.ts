import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  nombre:string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})

export class Products {
  
  private products:Product[] = [
    {
      id: 1,
      nombre: 'Simi fachero',
      descripcion : 'Simi con skin fachera',
      precio: 6500,
      imagen: '/img/simiFacha.jpeg'
    },
    {
      id: 2,
      nombre: 'Luffy Simi',
      descripcion: 'Peluche de simi con skin de Luffi OP',
      precio: 9200,
      imagen: '/img/simiLuffy.jpeg'
    },
    {
      id: 3,
      nombre: 'Simi Playero',
      descripcion: 'Peluche de Simi con skin de playa',
      precio: 3900,
      imagen: '/img/simiPlayero.jpeg'
    },
   {
      id: 4,
      nombre: 'Simi Punketo',
      descripcion: 'Simi con skin de punketo metalero',
      precio: 1000,
      imagen: '/img/simiPunk.jpeg'
   }
  ]
  constructor(){}
  getProducts():Product[]{
    return this.products;
  }
}
