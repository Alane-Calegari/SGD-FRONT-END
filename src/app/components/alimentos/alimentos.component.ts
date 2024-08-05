import { Component } from '@angular/core';
import { AlimentoService } from '../../services/alimento.service';
import { Alimento } from '../../classes/alimento';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrl: './alimentos.component.css'
})
export class AlimentosComponent {

  alimentos: Alimento[] = [];
  itemSelecionado: number = 0;
  formCadastro!: FormGroup;
  formUpdate!: FormGroup;

  constructor (private alimentoService: AlimentoService, private fb: FormBuilder) {}

  ngOnInit(){
    this.getAll();
    this.alimentoForm();
    this.alimentoFormUpdate();
  }

  pegarElemento(alimento: Alimento) {
    this.itemSelecionado = alimento.id;
   }

   alimentoForm(){
    this.formCadastro = this.fb.group({
      nome: ['', Validators.required],
      calorias: ['', Validators.required],
    });
   }

   alimentoFormUpdate(){
    this.formUpdate = this.fb.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      calorias: ['', Validators.required]
    })
   }

  getAll() {
    this.alimentoService.getAll().subscribe({
      next: (response) => {
        this.alimentos = response;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
      }    
    });
  }

  delete(id: number) {
    this.alimentoService.delete(id).subscribe({
      next: () => {
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        this.getAll();
      }    
    });
  }

  post() {  
    this.alimentoService.post(this.formCadastro.value).subscribe({
      next:() => {
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        this.getAll();
      }
    });
    }

    update() {
      this.formUpdate.value.id = this.itemSelecionado;
      this.alimentoService.update(this.formUpdate.value).subscribe({
        next:() => {
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {
          this.getAll();
        }
      });
    }  
}
