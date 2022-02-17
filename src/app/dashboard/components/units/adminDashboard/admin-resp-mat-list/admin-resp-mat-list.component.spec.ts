import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRespMatListComponent } from './admin-resp-mat-list.component';

describe('AdminRespMatListComponent', () => {
  let component: AdminRespMatListComponent;
  let fixture: ComponentFixture<AdminRespMatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRespMatListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRespMatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
