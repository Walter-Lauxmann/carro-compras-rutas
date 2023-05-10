import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../productos';

@Component({
  selector: 'app-producto-alertas',
  templateUrl: './producto-alertas.component.html',
  styleUrls: ['./producto-alertas.component.css']
})
export class ProductoAlertasComponent {
  @Input() producto: Producto | undefined;
  @Output() notificarme = new EventEmitter();

}
