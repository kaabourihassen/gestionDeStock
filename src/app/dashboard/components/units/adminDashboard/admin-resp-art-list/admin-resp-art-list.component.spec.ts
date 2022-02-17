import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRespArtListComponent } from './admin-resp-art-list.component';

describe('AdminRespArtListComponent', () => {
  let component: AdminRespArtListComponent;
  let fixture: ComponentFixture<AdminRespArtListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRespArtListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRespArtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
