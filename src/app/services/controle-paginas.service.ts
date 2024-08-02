import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlePaginasService {

  constructor() { }

  dia: boolean = false;
  atividade: boolean = false;
  alimento: boolean = false;

  getPaginaDia(): boolean{
    return this.dia;
  }

  setPaginaDia(valor: boolean){
    this.dia = valor;
  } 

  getPaginaAtividade(): boolean{
    return this.atividade;
  }

  setPaginaAtividade(valor: boolean){
    this.atividade = valor;
  } 

  getPaginaAlimento(): boolean{
    return this.alimento;
  }

  setPaginaAlimento(valor: boolean){
    this.alimento = valor;
  }  

}
