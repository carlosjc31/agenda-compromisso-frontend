import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agenda } from './agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private url = 'http://localhost:3000/agendas';

  constructor(private http: HttpClient) { }

getAgendas(): Observable<Agenda[]> {
  return this.http.get<Agenda[]>(this.url);
}

}
