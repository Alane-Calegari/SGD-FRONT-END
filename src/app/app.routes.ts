import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';

export const routes: Routes = [
    {path: 'paginaInicial', component: PaginaInicialComponent},
    {path: '', redirectTo: 'paginaInicial', pathMatch: 'full'} 
];
