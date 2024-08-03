import { Component } from '@angular/core';
import { AtividadeService } from '../../services/atividade.service';
import { Atividade } from '../../classes/atividade';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrl: './atividades.component.css'
})
export class AtividadesComponent {

  atividades: Atividade[] = [];
  itemSelecionado: number = 0;
  formCadastro!: FormGroup;
  formUpdate!: FormGroup;

 constructor (private atividadeService: AtividadeService, private fb: FormBuilder) {}

 ngOnInit(){
  this.getAll();
  this.atividadeForm();
  this.atividadeFormUpdate();
 }

 pegarElemento(atividade: Atividade) {
  this.itemSelecionado = atividade.id;
  console.log(this.itemSelecionado);
 }

 atividadeForm(){
  this.formCadastro = this.fb.group({
    descricao: ['', Validators.required]
  });
 }

 atividadeFormUpdate(){  
  this.formUpdate = this.fb.group({
    id: ['', Validators.required], 
    descricao:['', Validators.required]
  });
 }

 getAll(){
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

 delete(id: number) {
  this.atividadeService.delete(id).subscribe({
    next:(response) => {
      console.log(response);
    },
    error: (e) => {
      console.log(e);
    },
    complete: () => {
      this.getAll();
      console.log("Atividade excluída com sucesso!");
    }
  });
 }

 post() {  
  this.atividadeService.post(this.formCadastro.value).subscribe({
    next:(response) => {
      console.log(response);
    },
    error: (e) => {
      console.log(e);
    },
    complete: () => {
      this.getAll();
      console.log("Atividade cadastrada com sucesso!");
    }
  });
  }

  update() {
    this.formUpdate.value.id = this.itemSelecionado;
    this.atividadeService.update(this.formUpdate.value).subscribe({
      next:(response) => {
        console.log(response);
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        this.getAll();
        console.log("Atividade atualizada com sucesso!");
      }
    });
  }  
 }

 


