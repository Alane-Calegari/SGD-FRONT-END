import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { DiasComponent } from './components/dias/dias.component';
import { AlimentosComponent } from './components/alimentos/alimentos.component';
import { AtividadesComponent } from './components/atividades/atividades.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaginaInicialComponent,
    DiasComponent,
    AlimentosComponent,
    AtividadesComponent    
  ],
  imports: [
    CommonModule,
    RouterLink,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,   
    ReactiveFormsModule 
  ]
})
export class AppModule { }
