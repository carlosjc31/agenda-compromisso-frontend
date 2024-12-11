import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agenda } from './agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  apiurl = 'http://localhost:8080/agenda';

  constructor(private http: HttpClient) { }

  getAgendas(): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.apiurl);
  }

  delete(agenda: Agenda) {
    return this.http.delete<void>(`${this.apiurl}/${agenda.id}`);
  }

  getAgendasById(id:number): Observable<Agenda> {
    return this.http.get<Agenda>(`${this.apiurl}/${id}`);
  }
  update(agenda: Agenda): Observable<Agenda> {
    return this.http.put<Agenda>(`${this.apiurl}/${agenda.id}`, agenda);
  }

  save(agenda: Agenda): Observable<Agenda> {
    return this.http.post<Agenda>(this.apiurl, agenda);
  }

}
