import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { ViajeDestino } from './../../models/viaje-destino.model';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.module';
import { VoteUpAction, VoteDownAction } from './../../models/destinos-viajes-state.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-viaje-destino',
  templateUrl: './viaje-destino.component.html',
  styleUrls: ['./viaje-destino.component.css'],

animations: [
  trigger('esFavorito', [
    state('estadoFavorito', style({
      backgroundColor: 'PaleTurquoise'
    })),
    state('estadoNoFavorito', style({
      backgroundColor: 'WhiteSmoke'
    })),
    transition('estadoNoFavorito => estadoFavorito', [
      animate('3s')
    ]),
    transition('estadoFavorito => estadoNoFavorito', [
      animate('1s')
    ]),
  ])
 ],
})

export class ViajeDestinoComponent implements OnInit {
  @Input() destino: ViajeDestino;
  @Input('idx') position: number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() onClicked: EventEmitter<ViajeDestino>;
  
  constructor(private store: Store<AppState>){
    this.onClicked = new EventEmitter();
  }

  ngOnInit(){

  }

ir(){
  this.onClicked.emit(this.destino);
   return false;
}

voteUp(){
  this.store.dispatch(new VoteUpAction(this.destino));
  return false;
}

voteDown(){
  this.store.dispatch(new VoteDownAction(this.destino));
  return false;
}

}

