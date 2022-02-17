import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielFormRComponent } from './materiel-form-r.component';

describe('MaterielFormRComponent', () => {
  let component: MaterielFormRComponent;
  let fixture: ComponentFixture<MaterielFormRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielFormRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterielFormRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
