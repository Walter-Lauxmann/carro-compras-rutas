import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  items = this.carritoService.getItems();
  total = 0;

  formularioChequeo = this.formBuilder.group({
    nombre: '',
    direccion: '',
  });

  constructor(
    private carritoService: CarritoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    for (let item of this.items) {
      this.total += item.precio;
    }
  }

  onSubmit(): void {
    // Procesamos los datos a chequear
    this.items = this.carritoService.limpiarCarrito();
    console.warn('Su orden ha sido enviada', this.formularioChequeo.value);
    this.formularioChequeo.reset();
  }
}
