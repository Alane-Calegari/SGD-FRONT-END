import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Alimento } from '../classes/alimento';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {

  url = "http://localhost:8080/alimentos"  

  constructor(private http: HttpClient) { }

  getAll(): Observable<Alimento[]> {
    return this.http.get<Alimento[]>(this.url).pipe(map(rawList => {return rawList}));
  }

  delete(id: number): Observable<string> {
    return this.http.delete(`${this.url}?id=${id}`, {responseType:'text'});
  }

  post(alimento: Alimento): Observable<string> {
    return this.http.post(this.url, alimento, {responseType:'text'});
  }
  update(alimento: Alimento): Observable<string> {
    return this.http.put(this.url, alimento, {responseType:'text'});
  }  
}
