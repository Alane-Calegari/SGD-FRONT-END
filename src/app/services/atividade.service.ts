import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Atividade } from '../classes/atividade';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  url: string = "http://localhost:8080/atividades";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(this.url).pipe(map(rawList => {return rawList}));    
  }

  delete(id: number): Observable<string> {
    return this.http.delete(`${this.url}?id=${id}`, {responseType:'text'});
  } 

  post(atividade: Atividade): Observable<string> {
    return this.http.post(this.url, atividade, {responseType:'text'});
  }

  update(atividade: Atividade): Observable<string> {
    return this.http.put(this.url, atividade, {responseType:'text'});
  }
 }
