import { Component, numberAttribute } from '@angular/core';
import { Dia } from '../../classes/dia';
import { DiaService } from '../../services/dia.service';
import { AlimentoService } from '../../services/alimento.service';
import { AtividadeService } from '../../services/atividade.service';
import { Atividade } from '../../classes/atividade';
import { Alimento } from '../../classes/alimento';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrl: './dias.component.css'
})
export class DiasComponent {

  alimentos: Alimento[] = [];
  atividades: Atividade[] = [];
  dias: Dia[] = [];
  itemSelecionado: number = 0;
  primeiraTela: boolean = true;
  ultimaTela: boolean = false;

  constructor (private diaService: DiaService, private alimentoService: AlimentoService, private atividadeService: AtividadeService){}

  ngOnInit(){
    this.getAll();  
    this.getAllAtividades();  
    this.getAllAlimentos();
  }

  pegarElemento(dia: Dia) {
    this.itemSelecionado = dia.id;
    console.log(this.itemSelecionado);
  }

  getAllAlimentos() {
    this.alimentoService.getAll().subscribe({
      next: (response) => {
        this.alimentos = response;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        console.log("Deu certo!");
      }    
    });
  }

  getAllAtividades(){
    this.atividadeService.getAll().subscribe({
      next: (response) => {
        this.atividades = response;
      }, 
      error: (e) => { 
        console.log(e);
      },
      complete: () => {
        console.log("Deu certo!");
      }
  
    });
   }



  getAll() {
    this.diaService.getAll().subscribe ({
      next: (response) => {
        this.dias = response;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        console.log("Deu certo!");
      }      
    });
  }

  delete(){
    this.diaService.delete(this.itemSelecionado).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (e) => {
        console.log(e);
      }, 
      complete: () => {
        console.log("Dia excluído com sucesso!");
        this.getAll();
      }       
    });
  }

  

  


}
