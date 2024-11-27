import { Component } from '@angular/core';
import { Agenda } from '../agenda';

@Component({
  selector: 'app-agenda-lista',
  standalone: false,
  templateUrl: './agenda-lista.component.html',
  styleUrl: './agenda-lista.component.css'
})
export class AgendaListaComponent {
agendas: Agenda[] = [];

}
