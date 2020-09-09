import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ViajeDestinoComponent } from './viaje-destino/viaje-destino.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    AppComponent,
    ViajeDestinoComponent,
    ListaDestinosComponent,
    NavbarComponent,
    FooterComponent,
    TarjetasComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
