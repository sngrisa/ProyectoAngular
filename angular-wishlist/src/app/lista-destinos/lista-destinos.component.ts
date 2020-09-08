import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destino = String [''];
  constructor() { 
  this.destino = ['Cordoba','Rosario','La Plata','Buenos Aires'];
  }
  ngOnInit(): void {
  }

}
