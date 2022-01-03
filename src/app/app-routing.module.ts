import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscritorioComponent } from './pages/component/escritorio/escritorio.component';
import { HomeComponent } from './pages/component/home/home.component';
import { NuevoTicketComponent } from './pages/component/nuevo-ticket/nuevo-ticket.component';
import { PublicoComponent } from './pages/component/publico/publico.component';

const routes: Routes = [
  { path: 'escritorio/:id', component: EscritorioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'nuevo-ticket', component: NuevoTicketComponent },
  { path: 'publico', component: PublicoComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
