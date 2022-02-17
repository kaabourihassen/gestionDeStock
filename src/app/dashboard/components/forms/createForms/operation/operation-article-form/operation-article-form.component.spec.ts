import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationArticleFormComponent } from './operation-article-form.component';

describe('OperationArticleFormComponent', () => {
  let component: OperationArticleFormComponent;
  let fixture: ComponentFixture<OperationArticleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationArticleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationArticleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
