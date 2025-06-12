import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCurriculoComponent } from './ver-curriculo.component';

describe('VerCurriculoComponent', () => {
  let component: VerCurriculoComponent;
  let fixture: ComponentFixture<VerCurriculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerCurriculoComponent]
    });
    fixture = TestBed.createComponent(VerCurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
