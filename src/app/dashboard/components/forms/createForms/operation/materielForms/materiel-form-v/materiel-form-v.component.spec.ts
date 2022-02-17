import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielFormVComponent } from './materiel-form-v.component';

describe('MaterielFormVComponent', () => {
  let component: MaterielFormVComponent;
  let fixture: ComponentFixture<MaterielFormVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielFormVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterielFormVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
