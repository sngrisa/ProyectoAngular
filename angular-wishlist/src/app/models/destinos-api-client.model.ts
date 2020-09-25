import { BehaviorSubject, Subject } from 'rxjs';
import { ViajeDestino } from './viaje-destino.model';
import { Store } from '@ngrx/store';
import { AppState } from './../app.module';
import { ElegidoFavoritoAction, NuevoDestinoAction } from './destinos-viajes-state.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DestinosApiClient {
	destino: ViajeDestino[];
	constructor(public store: Store<AppState>) {
       this.destino = [];
  }

 getbyId(id : String): ViajeDestino{
	return this.destino.filter(function(d) { return d.id.toString() == id; })[0];
 }

 add(d:ViajeDestino){
    this.store.dispatch(new NuevoDestinoAction(d));
 }

 getAll(): ViajeDestino []{
	return this.destino;
 }

 elegir(d: ViajeDestino){
		this.store.dispatch(new ElegidoFavoritoAction(d));
 }
}