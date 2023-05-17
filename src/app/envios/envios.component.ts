import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {

  costosDeEnvio!: Observable<{tipo: string, precio: number}[]>;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.costosDeEnvio = this.carritoService.obtenerCostosDeEnvio();
  }
}
