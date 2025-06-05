import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCurriculoComponent } from './lista-curriculo.component';

describe('ListaCurriculoComponent', () => {
  let component: ListaCurriculoComponent;
  let fixture: ComponentFixture<ListaCurriculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCurriculoComponent]
    });
    fixture = TestBed.createComponent(ListaCurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
