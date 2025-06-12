import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurriculosService } from 'src/app/services/curriculos.service';
import { Curriculo } from 'src/app/models/curriculo.model';

@Component({
  selector: 'app-editar-curriculo',
  templateUrl: './editar-curriculo.component.html',
  styleUrls: ['./editar-curriculo.component.scss']
})
export class EditarCurriculoComponent implements OnInit {
  curriculo: Curriculo | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private curriculosService: CurriculosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.curriculosService.getCurriculos().subscribe((curriculos: Curriculo[]) => {
        const encontrado = curriculos.find(c => String(c.id) === String(id));
        if (encontrado) {
          this.curriculo = new Curriculo(
            encontrado.id,
            encontrado.nome,
            encontrado.idade,
            encontrado.formacao,
            encontrado.descricao
          );
        }
      });
    }
  }

  atualizarCurriculo() {
  if (!this.curriculo) return;

  // Verificação dos campos obrigatórios
  if (
    !this.curriculo.id ||
    !this.curriculo.nome ||
    !this.curriculo.idade ||
    !this.curriculo.formacao ||
    !this.curriculo.descricao
  ) {
    alert('Preencha todos os campos antes de atualizar!');
    return;
  }

  this.curriculosService.atualizarCurriculo(this.curriculo.id, this.curriculo).subscribe(() => {
    alert('Currículo atualizado com sucesso!');
    this.router.navigate(['/curriculo-listar']);
  }, err => {
    alert('Erro ao atualizar currículo!');
    console.error(err);
  });
}
}