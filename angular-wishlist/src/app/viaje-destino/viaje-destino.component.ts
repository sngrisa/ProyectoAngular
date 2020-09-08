import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viaje-destino',
  templateUrl: './viaje-destino.component.html',
  styleUrls: ['./viaje-destino.component.css']
})
export class ViajeDestinoComponent implements OnInit {
  @Input() nombre: string;
  constructor() {
    this.nombre="Viajes";
  }
  ngOnInit(): void {
  }
}
