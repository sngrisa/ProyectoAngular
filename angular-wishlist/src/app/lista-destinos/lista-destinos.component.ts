import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ViajeDestino } from './../models/viaje-destino.model';
import { DestinosApiClient } from './../models/destinos-api-client.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { NuevoDestinoAction, ElegidoFavoritoAction } from '../models/destinos-viajes-state.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css'],
  providers: [DestinosApiClient],
})

export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<ViajeDestino>;
  updates: string[];
  
  constructor(public destinosApiClient: DestinosApiClient, public store: Store<AppState>) { 
  this.onItemAdded = new EventEmitter();
  this.updates = [];
  this.store.select(state => state.destinos.favorito)
    .subscribe(d => {
      if (d != null){
        this.updates.push('Se eligió: ' + d.nombre);
      }
    });
    }

  ngOnInit(){
    
 }
  
  agregado(d: ViajeDestino){
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
    this.store.dispatch(new NuevoDestinoAction(d));
  }

  elegido(e: ViajeDestino){
    this.destinosApiClient.elegir(e);
    this.store.dispatch(new ElegidoFavoritoAction(e));
    }
  }

