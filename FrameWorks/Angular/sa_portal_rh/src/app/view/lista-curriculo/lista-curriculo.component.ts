import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculosService } from 'src/app/services/curriculos.service';

@Component({
  selector: 'app-lista-curriculo',
  templateUrl: './lista-curriculo.component.html',
  styleUrls: ['./lista-curriculo.component.scss']
})
export class ListaCurriculoComponent {
  public curriculo: Curriculo = new Curriculo(0,'', '', '', '');

  public curriculos: Curriculo[] = [];
  router: any;

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
    this._curriculosService.cadastrarCurriculo(this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0,"","","","");
        this.listarCurriculos();
        alert("Curriculo cadastardo com sucesso!");
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
