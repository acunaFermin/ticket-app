import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscritorioComponent } from './pages/component/escritorio/escritorio.component';
import { NuevoTicketComponent } from './pages/component/nuevo-ticket/nuevo-ticket.component';
import { PublicoComponent } from './pages/component/publico/publico.component';
import { HomeComponent } from './pages/component/home/home.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EscritorioComponent,
    NuevoTicketComponent,
    PublicoComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
