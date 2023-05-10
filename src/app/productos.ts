export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
}

export const productos = [
  {
    id: 1,
    nombre: 'Phone XL',
    precio: 799,
    descripcion: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    nombre: 'Phone Mini',
    precio: 699,
    descripcion: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    nombre: 'Phone Standard',
    precio: 299,
    descripcion: '',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
