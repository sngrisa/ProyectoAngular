import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ViajeDestino } from './../models/viaje-destino.model';

@Component({
  selector: 'app-viaje-destino',
  templateUrl: './viaje-destino.component.html',
  styleUrls: ['./viaje-destino.component.css']
})
export class ViajeDestinoComponent implements OnInit {
  @Input() destino: ViajeDestino;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor(){}

  ngOnInit(){}
}
