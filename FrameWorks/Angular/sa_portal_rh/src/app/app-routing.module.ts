import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { CurriculosComponent } from './view/curriculos/curriculos.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { PainelCurriculosComponent } from './view/painel-curriculos/painel-curriculos.component';
import { ListaCurriculoComponent } from './view/lista-curriculo/lista-curriculo.component';
import { EditarCurriculoComponent } from './view/editar-curriculo/editar-curriculo.component';
import { VerCurriculoComponent } from './view/ver-curriculo/ver-curriculo.component';

const routes: Routes = [
  {path: "",component: InicioComponent},
  {path: "curriculos", component: CurriculosComponent},
  {path: "vagas", component: VagasComponent},
  {path: "vaga-listar", component: PainelVagasComponent},
  {path: "curriculo-listar", component: PainelCurriculosComponent},
  {path: "lista-curriculo", component: ListaCurriculoComponent},
  {path: 'editar-curriculo/:id', component: EditarCurriculoComponent },
  {path: 'ver-curriculo/:id', component: VerCurriculoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
