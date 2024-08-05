import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Horario } from '../classes/Horario';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  url: string = "http://localhost:8080/horarios";

  constructor(private http: HttpClient) { }


  getAll(): Observable<Horario[]> {
    return this.http.get<Horario[]>(this.url).pipe(map(rawList => {return rawList}));
  }
}
