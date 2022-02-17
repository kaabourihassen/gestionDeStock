import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMagazinComponent } from './update-magazin.component';

describe('UpdateMagazinComponent', () => {
  let component: UpdateMagazinComponent;
  let fixture: ComponentFixture<UpdateMagazinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMagazinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMagazinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
