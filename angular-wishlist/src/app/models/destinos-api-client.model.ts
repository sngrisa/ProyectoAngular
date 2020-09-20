import { BehaviorSubject, Subject } from 'rxjs';
import { ViajeDestino } from './viaje-destino.model';
import { Store } from '@ngrx/store';
import { AppState } from './../app.module';
import { ElegidoFavoritoAction, NuevoDestinoAction } from './destinos-viajes-state.model';

export class DestinosApiClient {
	destino: ViajeDestino[];
  current: Subject<ViajeDestino> = new BehaviorSubject<ViajeDestino>(null);
	constructor() {
       this.destino = [];
  }
	add(d:ViajeDestino){
    this.destino.push(d);
	}
	getAll(): ViajeDestino []{
	  return this.destino;
	}
	getbyId(id : String): ViajeDestino{
		return this.destino.filter(function(d) { return d.id.toString() == id; })[0];
	}
	elegir(d: ViajeDestino){
		this.destino.forEach(x => x.setSelected(false));
		d.setSelected(true);
		this.current.next(d);
	}
	subscribeOnChange(fn){
		this.current.subscribe(fn);
	}
}