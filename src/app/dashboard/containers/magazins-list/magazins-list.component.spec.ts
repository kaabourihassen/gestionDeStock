import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazinsListComponent } from './magazins-list.component';

describe('MagazinsListComponent', () => {
  let component: MagazinsListComponent;
  let fixture: ComponentFixture<MagazinsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazinsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazinsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
