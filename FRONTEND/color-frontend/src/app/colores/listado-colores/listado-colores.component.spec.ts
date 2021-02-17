import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoColoresComponent } from './listado-colores.component';

describe('ListadoColoresComponent', () => {
  let component: ListadoColoresComponent;
  let fixture: ComponentFixture<ListadoColoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoColoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
