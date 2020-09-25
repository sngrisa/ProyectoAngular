import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ViajeDestinoComponent } from './components/viaje-destino/viaje-destino.component';
import { ListaDestinosComponent } from './components/lista-destinos/lista-destinos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { ListadeejemploComponent } from './components/listadeejemplo/listadeejemplo.component';
import { RouterModule, Routes} from '@angular/router';
import { DestinoDetalleComponent } from './components/destino-detalle/destino-detalle.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDestinoViajeComponent } from './components/form-destino-viaje/form-destino-viaje.component';
import { DestinosViajesState, reducerDestinosViajes, intializeDestinosViajesState, DestinosViajesEffects } from './models/destinos-viajes-state.model';
import { ActionReducerMap, INITIAL_STATE, ReducerObservable, Store, StoreModule } from '@ngrx/store';
import { StoreModule as NgRxStoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoginComponent } from './components/login/login/login.component';
import { ProtectedComponent } from './components/protected/protected/protected.component';
import { UsuarioLogueadoGuard } from './guards/usuario-logueado/usuario-logueado.guard';
import { AuthService } from './services/auth.service';
import { VuelosComponentComponent } from './components/vuelos/vuelos-component/vuelos-component.component';
import { VuelosMainComponentComponent } from './components/vuelos/vuelos-main-component/vuelos-main-component.component';
import { VuelosMasInfoComponentComponent } from './components/vuelos/vuelos-mas-info-component/vuelos-mas-info-component.component';
import { VuelosDetalleComponent } from './components/vuelos/vuelos-detalle-component/vuelos-detalle-component.component';
import { VuelosComponent } from './components/vuelos/vuelos/vuelos.component';
import { ReservasModule } from './reservas/reservas.module';

//app config
export interface AppConfig{
  apiEndpoint: String;
}

const APP_CONFIG_VALUE: AppConfig = {
  apiEndpoint: 'http://localhost:3000'
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
// fin app config

export const childrenRoutesVuelos: Routes = [
  {path: '', redirectTo: 'main', pathMatch:'full'},
  {path: 'main', component: VuelosMainComponentComponent},
  {path: 'mas-info', component: VuelosMasInfoComponentComponent},
  {path: ':id', component: VuelosDetalleComponent},
];

const routes: Routes =[
   {path: '', redirectTo: 'home', pathMatch: 'full'},
   {path: 'home', component: ListaDestinosComponent},
   {path: 'destino/:id', component: DestinoDetalleComponent},
   {path: 'login', component: LoginComponent},
   {path: 'reservas', component: ReservasModule},
   {path: 'protected', component: ProtectedComponent,
   canActivate: [UsuarioLogueadoGuard],
  },

  {
    path: 'vuelos',
    component: VuelosComponent,
    canActivate: [ UsuarioLogueadoGuard ],
    children: childrenRoutesVuelos,
  }
 
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
    LoginComponent,
    ProtectedComponent,
    VuelosComponentComponent,
    VuelosMainComponentComponent,
    VuelosMasInfoComponentComponent,
    VuelosDetalleComponent,
    VuelosComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgRxStoreModule.forRoot(reducers, ({initialState: reducersInitialsState })),
    EffectsModule.forRoot([DestinosViajesEffects]),
    StoreDevtoolsModule.instrument(),
    ReservasModule,
  ],

  providers: [
    UserService,
    AuthService,
    UsuarioLogueadoGuard,
    { provide: APP_CONFIG, useValue: APP_CONFIG_VALUE },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
