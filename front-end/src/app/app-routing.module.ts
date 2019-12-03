import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivrosComponent } from './livros/livros.component';
import { EditorasComponent } from './editoras/editoras.component';
import { AutoresComponent } from './autores/autores.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'livros', component: LivrosComponent },
  { path: 'editoras', component: EditorasComponent },
  { path: 'autores', component: AutoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
