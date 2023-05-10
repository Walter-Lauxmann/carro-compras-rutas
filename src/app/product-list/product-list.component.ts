import { Component } from '@angular/core';

import { productos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productos = [...productos];

  compartir() {
    window.alert('El producto ha sido compartido!');
  }

  onNotificarme() {
    window.alert('Está siendo notificado que el producto está en venta');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
