import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './pages/contato/contato.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [ //criar as rotas de navegação
  {path:"", component: InicioComponent},
  {path: "produtos", component: ProdutosComponent},
  {path: "contato", component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
