import { Component, OnInit } from '@angular/core';
import { ViajeDestino } from './../models/viaje-destino.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destino = ViajeDestino[''];
  constructor() { 
  this.destino = [];
  }
  ngOnInit(){
  }
  guardar(nombre: string, url:string): boolean{
    this.destino.push(new ViajeDestino(nombre,url));
    console.log(this.destino);
    return false;
  }
}
