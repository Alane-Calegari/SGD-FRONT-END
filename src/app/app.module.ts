import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { DiasComponent } from './components/dias/dias.component';
import { AlimentosComponent } from './components/alimentos/alimentos.component';
import { AtividadesComponent } from './components/atividades/atividades.component';




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
    HttpClientModule
  ]
})
export class AppModule { }
