import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsArticleListComponent } from './operations-article-list.component';

describe('OperationsArticleListComponent', () => {
  let component: OperationsArticleListComponent;
  let fixture: ComponentFixture<OperationsArticleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsArticleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
