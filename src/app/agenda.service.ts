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

  getAgendasById(id: number): Observable<Agenda> {
    return this.http.get<Agenda>(`${this.url}/${id}`);
  }

updade(agenda: Agenda): Observable<Agenda> {
  return this.http.put<Agenda>(`${this.url}/${agenda.id}`, agenda);
}

}
