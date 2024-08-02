import { Component } from '@angular/core';
import { ControlePaginasService } from '../../services/controle-paginas.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.css'
})
export class PaginaInicialComponent {

  
 constructor(private controlePaginas: ControlePaginasService) {}

 getPaginaAlimento(): boolean {
  return this.controlePaginas.getPaginaAlimento();
 }  

 setPaginaALimento(valor: boolean) {
  this.controlePaginas.setPaginaAlimento(valor);
 }

 getPaginaAtividade(): boolean {
  return this.controlePaginas.getPaginaAtividade();
 }

 setPaginaAtividade(valor: boolean) {
  this.controlePaginas.setPaginaAtividade(valor);
 }

 getPaginaDia(): boolean {
  return this.controlePaginas.getPaginaDia();
 }

 setPaginaDia(valor: boolean) {
  this.controlePaginas.setPaginaDia(valor);
 }
}
