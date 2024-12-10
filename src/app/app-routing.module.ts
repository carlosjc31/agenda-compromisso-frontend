import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaListaComponent } from './agenda-lista/agenda-lista.component';
import { AgendaFormComponent } from './agenda-form/agenda-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo:'agendas', pathMatch: 'full' },
  { path: 'agendas', component: AgendaListaComponent },
  { path: 'agendas/:id', component: AgendaFormComponent },
  { path: 'agenda', component: AgendaFormComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
