import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: DestinoViaje[];
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  constructor() { 
    this.destinos = [];
    this.onItemAdded = new EventEmitter();
  }

  ngOnInit(): void {
  }
  /*
  guardar(nombre:string, url:string):boolean {
    this.destinos.push(new DestinoViaje(nombre, url));
    //console.log(this.destinos);
    return false;
  }*/
  agregado(d: DestinoViaje) {
    this.onItemAdded.emit(d);
    this.destinos.push(new DestinoViaje(d.nombre, d.u));
  }

  elegido(d: DestinoViaje) {
    this.destinos.forEach(function (x) { x.setSelected(false); });
    d.setSelected(true);
  }
}
