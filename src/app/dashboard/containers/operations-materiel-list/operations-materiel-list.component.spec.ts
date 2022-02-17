import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsMaterielListComponent } from './operations-materiel-list.component';

describe('OperationsMaterielListComponent', () => {
  let component: OperationsMaterielListComponent;
  let fixture: ComponentFixture<OperationsMaterielListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsMaterielListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsMaterielListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
