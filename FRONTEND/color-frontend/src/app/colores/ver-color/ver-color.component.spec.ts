import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerColorComponent } from './ver-color.component';

describe('VerColorComponent', () => {
  let component: VerColorComponent;
  let fixture: ComponentFixture<VerColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
