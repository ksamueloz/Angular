import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() nombre: string;
  constructor() { 
    //Nombre es sucepstible de ser pasado como parámetro
  }

  ngOnInit(): void {
  }

}
