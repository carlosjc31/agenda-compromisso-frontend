import { Component, OnInit } from '@angular/core';
import { Agenda } from '../agenda';
import { AgendaService } from '../agenda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-agenda',
  templateUrl: './lista-agenda.component.html',
  styleUrl: './lista-agenda.component.css'
})
export class ListaAgendaComponent implements OnInit {


  agendas: Agenda[] = [];




  constructor(private agendaService: AgendaService,
              private router: Router
  ) { }

  ngOnInit(){
    this.loadAgendas();
  }

  delete(agenda: Agenda) {
    this.agendaService.delete(agenda).subscribe({
      next: () => this.loadAgendas()
    });
    }
  loadAgendas(){
    this.agendaService.getAgendas().subscribe({
      next: agendas => this.agendas = agendas
    })
  }

  create() {
    this.router.navigate(['agenda']);
    }

}