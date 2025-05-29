import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss']
})
export class PainelVagasComponent implements OnInit{
  public vaga:Vaga = new Vaga(0, '', '', '', 0); // rastrear os dados no fortmulário por interpolação

  public vagas: Vaga[] = [];
  //armazenar os dados da API - json

  constructor(private _vagasService: VagasService){} // Aplicando o service no Construtor

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas() {
    // Lista as vagas do servidor usando o serviço 'VagaService'
    this._vagasService.getVagas().subscribe((retornaVaga) => {
      this.vagas = retornaVaga.map((item) => {
        // Mapeia os dados retornados para objetos 'Vaga'
        return new Vaga(
          item.id,
          item.nome,
          item.foto,
          item.descricao,
          item.salario
        );
      });
    });
  }

  //Listar unica vaga
  listarVagaUnica(vaga:Vaga){
    //Função para listar vaga única, para edição no formulário
    this.vaga = vaga;
    //A vaga clicada é mostrada no formulário =>
  }

  //Cadastrar Vaga
  cadastrar(){
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      ()=>{
        this.vaga = new Vaga(0,"","","",0); //limpar os campos do formulário 
        this.listarVagas();
        alert("Vaga cadastrada com suceeso!");
      }, (err) => { console.error("Exception: ",err);}
    );
  }

  //Atualizar Vaga
  atualizar(id:any){
    this._vagasService.atualizarVaga(id, this.vaga).subscribe(
      ()=>{
        this.vaga = new Vaga(0,"","","",0);
        this.listarVagas();
        alert("Vaga atualizada com sucesso!");
      }, (err) => {console.error("Exception: ",err);}
    );
  }

  //Deletar Vaga
  excluir(id:any){
    this._vagasService.removerVaga(id).subscribe(
      ()=>{
        this.listarVagas();
        alert("Vaga deletada com sucesso!");
      }, (err) => {console.error("Exception: ",err);}
    );
  }
}
