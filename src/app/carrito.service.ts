import { HttpClient } from '@angular/common/http';
import { Producto } from './productos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  items: Producto[] = [];

  constructor(private http: HttpClient) { }

  obtenerCostosDeEnvio() {
    return this.http.get<{tipo: string, precio:number}[]>('assets/envios.json');
  }

  agregarAlCarrito(producto: Producto) {
    this.items.push(producto);
  }

  getItems() {
    return this.items;
  }

  limpiarCarrito() {
    this.items = [];
    return this.items;
  }
}
