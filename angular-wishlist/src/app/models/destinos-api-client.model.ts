import { BehaviorSubject, Subject } from 'rxjs';
import { DestinoViaje } from './destino-viaje-model';
import { Store } from '@ngrx/store';
import { AppState } from './../app.module';
import { ElegidoFavoritoAction, NuevoDestinoAction } from './destinos-viajes-state.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DestinosApiClient {
	destino: DestinoViaje[];
	constructor(public store: Store<AppState>) {
       this.destino = [];
  }

 getbyId(id : String): DestinoViaje{
	return this.destino.filter(function(d) { return d.id.toString() == id; })[0];
 }

 add(d:DestinoViaje){
    this.store.dispatch(new NuevoDestinoAction(d));
 }

 getAll(): DestinoViaje []{
	return this.destino;
 }

 elegir(d: DestinoViaje){
		this.store.dispatch(new ElegidoFavoritoAction(d));
 }
}