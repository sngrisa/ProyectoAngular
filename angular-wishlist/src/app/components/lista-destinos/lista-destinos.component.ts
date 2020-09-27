import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DestinoViaje } from './../../models/destino-viaje-model';
import { DestinosApiClient } from './../../models/destinos-api-client.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.module';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css'],
  providers: [DestinosApiClient],
})

export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];
  all;
  
  constructor(public destinosApiClient: DestinosApiClient, public store: Store<AppState>) { 
  this.onItemAdded = new EventEmitter();
  this.updates = [];
  this.store.select(state => state.destinos.favorito)
    .subscribe(d => {
      if (d != null){
        this.updates.push('Se eligió: ' + d.nombre);
      }
    });
   store.select(state => state.destinos.items).subscribe(items => this.all = items);
    }

  ngOnInit(): void{
    this.store.select(state => state.destinos)
    .subscribe(data => {
      let d = data.favorito;
      if (d ! =null){
        this.updates.push("Se eligio: " + d.nombre);
      }
      });
 }
  
  agregado(d: DestinoViaje){
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(e: DestinoViaje){
    this.destinosApiClient.elegir(e);
    }

    getAll(){

    }
  }

