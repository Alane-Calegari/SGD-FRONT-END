import { Component } from '@angular/core';
import { Dia } from '../../classes/dia';
import { DiaService } from '../../services/dia.service';
import { AlimentoService } from '../../services/alimento.service';
import { AtividadeService } from '../../services/atividade.service';
import { Atividade } from '../../classes/atividade';
import { Alimento } from '../../classes/alimento';
import { HorarioService } from '../../services/horarioService';
import { Horario } from '../../classes/Horario';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrl: './dias.component.css'
})
export class DiasComponent {

  alimentos: Alimento[] = [];
  atividades: Atividade[] = [];
  dias: Dia[] = [];
  horarios: Horario[] = [];
  itemSelecionado: number = 0;
  primeiraTela: boolean = true;
  segundaTela: boolean = false;
  ultimaTela: boolean = false;
  dia = new Dia();

  constructor (private diaService: DiaService, 
    private alimentoService: AlimentoService, 
    private atividadeService: AtividadeService,
    private horarioService: HorarioService  
  ){}

  ngOnInit(){
    this.getAll();  
    this.getAllAtividades();  
    this.getAllAlimentos();
    this.getAllHorarios();
  }

  pegarElemento(dia: Dia) {
    this.itemSelecionado = dia.id;
    console.log(this.itemSelecionado);
  }

  getAllHorarios() {
    this.horarioService.getAll().subscribe({
      next: (response) => {
        this.horarios = response;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        console.log("Deu certo!");
        console.log(this.horarios);
      }    
    });
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

  getById() {
    this.diaService.getById(this.itemSelecionado).subscribe({
      next: (response) => {
        this.dia = response;
      },
      error: (e) => {
        console.log(e);
      }, 
      complete: () => {
        console.log("Deu Certo!");
      }
    });
  }

  


}
