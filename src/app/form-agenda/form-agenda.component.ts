import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgendaService } from '../agenda.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-agenda',
  templateUrl: './form-agenda.component.html',
  styleUrl: './form-agenda.component.css'
})
export class FormAgendaComponent implements OnInit {

  formGroupAgenda: FormGroup;
  isEditing: boolean = false;

  constructor(private router: Router,
              private activetedRoute: ActivatedRoute,
              private agendaService: AgendaService,
              private formBuilder: FormBuilder) {
    this.formGroupAgenda = this.formBuilder.group({
      id: [''],
      title: [''],
      description: [''],
      date_hora: [''],
      local: ['']
    });
  }

  ngOnInit(): void {
    const id = Number(this.activetedRoute.snapshot.paramMap.get('id'));
    if (id != 0) {
      this.isEditing = true;
      this.loadAgendas(id);
    }

  }
  loadAgendas(id: number) {
    this.agendaService.getAgendasById(id).subscribe({
      next: data => this.formGroupAgenda.setValue(data)
    });
  }

  update(){
  this.agendaService.update(this.formGroupAgenda.value).subscribe({
    next: () => this.router.navigate(['agendas'])
  });
  }

  save() {
    this.agendaService.save(this.formGroupAgenda.value).subscribe({
      next: () => this.router.navigate(['agendas'])
    });
    }

}
