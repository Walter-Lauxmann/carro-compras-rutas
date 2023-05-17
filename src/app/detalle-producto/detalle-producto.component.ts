import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Producto, productos } from '../productos';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
})
export class DetalleProductoComponent implements OnInit {
  producto: Producto | undefined;

  constructor(
    private route: ActivatedRoute,
    private carritoService: CarritoService
    ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const idProductoDeRuta = Number(routeParams.get('productoId'));

    this.producto = productos.find(producto => producto.id === idProductoDeRuta);
  }

  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    window.alert('Producto añadido al carrito');
  }
}
