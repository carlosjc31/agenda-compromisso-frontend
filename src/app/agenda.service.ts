import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agenda } from './agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private url = 'http://localhost:8080/agenda';

  constructor(private http: HttpClient) { }

  getAgendas(): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.url);
  }

  getAgendasById(id: number): Observable<Agenda> {
    return this.http.get<Agenda>(`${this.url}/${id}`);
  }

  delete(agenda: Agenda): Observable<void>{
     return this.http.delete<void>(`${this.url}/${agenda.id}`);
  }

  update(agenda: Agenda):Observable<Agenda> {
    return this.http.put<Agenda>(`${this.url}/${agenda.id}`, agenda);
  }

  save(agenda: Agenda): Observable<Agenda> {
    return this.http.post<Agenda>(this.url, agenda);
  }
}
