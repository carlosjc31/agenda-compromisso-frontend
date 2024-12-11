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
              private activatedRoute: ActivatedRoute,
              private service: AgendaService,
              private formBuilder: FormBuilder) {
    this.formGroupAgenda = this.formBuilder.group({
      id: [''],
      title: [''],
      description: [''],
      date: [''],
      local: ['']
    })
  };

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    if (id != 0) {

      this.loadAgendas(id);
      this.isEditing = true;
    }

  }
  loadAgendas(id: number){
    this.service.getAgendasById(id).subscribe({
      next: data => this.formGroupAgenda.patchValue(data)
    })
  };

  update(){
    const titulo = this.formGroupAgenda.get('title')?.value;
    if(!titulo || titulo.trim().length === "") {
      alert("Digite o título do compromisso!");
    }
    else{
      this.service.update(this.formGroupAgenda.value).subscribe({
      next: () => this.router.navigate(['agendas'])
  });
    }
  }
  save() {
    const titulo = this.formGroupAgenda.get('title')?.value;
    if(!titulo || titulo.trim().length === "") {
      alert("Digite o título do compromisso!");
    }
    else{
    this.service.save(this.formGroupAgenda.value).subscribe({
      next: () => this.router.navigate(['/agendas'])
    });
    }
  }
}
