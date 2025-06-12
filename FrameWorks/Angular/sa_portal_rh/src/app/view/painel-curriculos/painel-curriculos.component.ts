import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculosService } from 'src/app/services/curriculos.service';

@Component({
  selector: 'app-painel-curriculos',
  templateUrl: './painel-curriculos.component.html',
  styleUrls: ['./painel-curriculos.component.scss']
})
export class PainelCurriculosComponent implements OnInit{
  public curriculo: Curriculo = new Curriculo(0,  '', '', '', '');

  public curriculos: Curriculo[] = [];

  constructor(private _curriculosService: CurriculosService){}

  ngOnInit(): void {
    this.listarCurriculos();
  }


  listarCurriculos() {
    this._curriculosService.getCurriculos().subscribe((retornaCurriculo) => {
      this.curriculos = retornaCurriculo.map((item) => {
        return new Curriculo(
          item.id,
          item.nome,
          item.idade,
          item.formacao,
          item.descricao
        );
      });
    });
  }

  listarCurriculoUnico(curriculo: Curriculo){
    this.curriculo = curriculo;
  }

  cadastrarCurriculo(){
  // Verificação dos campos obrigatórios
  if (
    !this.curriculo.id ||
    !this.curriculo.nome ||
    !this.curriculo.idade ||
    !this.curriculo.formacao ||
    !this.curriculo.descricao
  ) {
    alert("Preencha todos os campos antes de cadastrar!");
    return;
  }

  this._curriculosService.cadastrarCurriculo(this.curriculo).subscribe(
    () => {
      this.curriculo = new Curriculo(0,"","","","");
      this.listarCurriculos();
      alert("Curriculo cadastrado com sucesso!");
    }, (err) => { console.error("Exception: ",err);}
  );
}

  atualizarCurriculo(id:any){
    this._curriculosService.atualizarCurriculo(id, this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0,"","","","");
        this.listarCurriculos();
        alert("Curriculo atualizado com sucesso!");
      }, (err) => {console.error("Exception: ",err);}
    );
  }

  excluirCurriculo(id:any){
    this._curriculosService.removerCurriculo(id).subscribe(
      () => {
        this.listarCurriculos();
        alert("Curriculo deletado com sucesso!");
      }, (err) => {console.error("Exception: ",err);}
    );
  }
}
