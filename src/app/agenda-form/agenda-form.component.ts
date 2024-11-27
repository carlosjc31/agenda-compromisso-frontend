import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-agenda-form',
  standalone: false,

  templateUrl: './agenda-form.component.html',
  styleUrl: './agenda-form.component.css'
})
export class AgendaFormComponent {
  formGroupAgenda: FormGroup;

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute,
              private service: AgendaService,
              private formBuilder: FormBuilder) {
   this.formGroupAgenda = this.formBuilder.group({
     id: [''],
     title: [''],
     description: [''],
     date_hora: [''],
     local: ['']
   });

   ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.loadAgendas(id);
  }

   loadAgendas(id: number): void {
    this.service.getAgendasById().subscribe({
      next: () => this.formGroupAgenda.setValue(data)
    });
  }

  update(): void {
    this.service.update(this.formGroupAgenda.value).subscribe({
      next: () => this.router.navigate(['/agendas'])
    });
  }
}

}


