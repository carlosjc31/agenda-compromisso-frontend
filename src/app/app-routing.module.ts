import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAgendaComponent } from './lista-agenda/lista-agenda.component';
import { FormAgendaComponent } from './form-agenda/form-agenda.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'agendas', component: ListaAgendaComponent },
  { path: 'agenda/:id', component: FormAgendaComponent },
  { path: 'agenda', component: FormAgendaComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
