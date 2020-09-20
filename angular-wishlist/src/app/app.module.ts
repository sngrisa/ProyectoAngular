import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ViajeDestinoComponent } from './viaje-destino/viaje-destino.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { ListadeejemploComponent } from './listadeejemplo/listadeejemplo.component';
import { RouterModule, Routes} from '@angular/router';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { UserService } from './user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDestinoViajeComponent } from './form-destino-viaje/form-destino-viaje.component';
import { DestinosApiClient } from './models/destinos-api-client.model';
import { ComboboxComponent } from './combobox/combobox.component';
import { DestinosViajesState, reducerDestinosViajes, intializeDestinosViajesState, DestinosViajesEffects } from './models/destinos-viajes-state.model';
import { ActionReducerMap, INITIAL_STATE, ReducerObservable, Store } from '@ngrx/store';
import { StoreModule as NgRxStoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

const routes: Routes =[
   {path: '', redirectTo: 'home', pathMatch: 'full'},
   {path: 'home', component: ListaDestinosComponent},
   {path: 'destino', component: DestinoDetalleComponent},
];



// Redux Init
export interface AppState{
  destinos: DestinosViajesState;
}

const reducers: ActionReducerMap<AppState> ={
  destinos: reducerDestinosViajes
};

let reducersInitialsState = {
  destinos: intializeDestinosViajesState()
};

// Redux Fin Init

@NgModule({
  declarations: [
    AppComponent,
    ViajeDestinoComponent,
    ListaDestinosComponent,
    NavbarComponent,
    FooterComponent,
    TarjetasComponent,
    ListadeejemploComponent,
    DestinoDetalleComponent,
    MensajeComponent,
    FormDestinoViajeComponent,
    ComboboxComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgRxStoreModule.forRoot(reducers, ({initialState: reducersInitialsState })),
    EffectsModule.forRoot([DestinosViajesEffects]),
  ],

  providers: [
    UserService,
    DestinosApiClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
