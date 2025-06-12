import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurriculosService } from 'src/app/services/curriculos.service';
import { Curriculo } from 'src/app/models/curriculo.model';

@Component({
  selector: 'app-ver-curriculo',
  templateUrl: './ver-curriculo.component.html',
  styleUrls: ['./ver-curriculo.component.scss']
})
export class VerCurriculoComponent implements OnInit {
  curriculo?: Curriculo;

  constructor(
    private route: ActivatedRoute,
    private curriculosService: CurriculosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.curriculosService.getCurriculos().subscribe((curriculos: Curriculo[]) => {
        this.curriculo = curriculos.find(c => String(c.id) === String(id));
      });
    }
  }
}