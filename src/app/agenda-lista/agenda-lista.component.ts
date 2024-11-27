
import { Component } from '@angular/core';
import { Agenda } from '../agenda';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-agenda-lista',
  standalone: false,
  templateUrl: './agenda-lista.component.html',
  styleUrl: './agenda-lista.component.css'
})
export class AgendaListaComponent {

  agendas: Agenda[] = [];

  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
    this.agendaService.getAgendas().subscribe(data => {
      this.agendas = data;
    });
  }

  delete(agenda: Agenda) {
    this.agendaService.delete(agenda).subscribe({
      next:() => this.loadAgendas()
    });
    }
  loadAgendas() {
    throw new Error('Method not implemented.');
  }

}
