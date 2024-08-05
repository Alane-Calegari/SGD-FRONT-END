import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Dia } from '../classes/dia';

@Injectable({
  providedIn: 'root'
})
export class DiaService {

  url: string = "http://localhost:8080/dias";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Dia[]> {
    return this.http.get<Dia[]>(this.url).pipe(map(rawList => {return rawList}));
  }

  delete(id: number): Observable<string> {
    return this.http.delete(`${this.url}?id=${id}`, {responseType: 'text'});
  }

  post(dia: Dia): Observable<string> {
    return this.http.post(this.url, dia, {responseType: 'text'});
  }

  getById(id: number): Observable<Dia> {
    return this.http.get<Dia>(`${this.url}/${id}`);
  }
}
