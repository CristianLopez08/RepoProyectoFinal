import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  descripcionCompleta: string; // Nueva propiedad
  precio: string;
  imagen: string;
  mostrarDescripcionCompleta?: boolean; // Propiedad opcional para controlar el estado
}

@Injectable({
  providedIn: 'root'
})
export class Products {
  private products: Product[] = [
    {
      id: 1,
      nombre: 'Simi fachero',
      descripcion: 'Simi con skin fachera',
      descripcionCompleta: 'Este Simi fachero viene con su mejor traje, gafas de sol incluidas. Perfecto para aquellos que quieren un peluche con estilo. Material: 100% algodón orgánico. Tamaño: 30cm.',
      precio: '$6500',
      imagen: '/img/simiFacha.jpeg'
    },
    {
      id: 2,
      nombre: 'Luffy Simi',
      descripcion: 'Peluche de simi con skin de Luffi OP',
      descripcionCompleta: 'Simi transformado en el capitán Luffy de One Piece. Incluye su característico sombrero de paja. Ideal para fans del anime. Material: Peluche suave. Tamaño: 35cm.',
      precio: '$9200',
      imagen: '/img/simiLuffy.jpeg'
    },
    {
      id: 3,
      nombre: 'Simi Playero',
      descripcion: 'Peluche de Simi con skin de playa',
      descripcionCompleta: 'Simi listo para la playa con su traje de baño y gafas de sol. Viene con una toalla pequeña incluida. Resistente al agua. Material: Felpa suave. Tamaño: 25cm.',
      precio: '$3900',
      imagen: '/img/simiPlayero.jpeg'
    },
    {
      id: 4,
      nombre: 'Simi Punketo',
      descripcion: 'Simi con skin de punketo metalero',
      descripcionCompleta: 'Simi en su versión más rebelde, con chaqueta de cuero falsa y peinado mohawk. Incluye collar de púas de tela. Material: Mezcla de algodón y poliéster. Tamaño: 28cm.',
      precio: '$1000',
      imagen: '/img/simiPunk.jpeg'
    }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  // Método opcional para alternar la descripción
  toggleDescripcion(producto: Product): void {
    producto.mostrarDescripcionCompleta = !producto.mostrarDescripcionCompleta;
  }
}