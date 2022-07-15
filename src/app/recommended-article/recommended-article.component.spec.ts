import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedArticleComponent } from './recommended-article.component';

describe('RecommendedArticleComponent', () => {
  let component: RecommendedArticleComponent;
  let fixture: ComponentFixture<RecommendedArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
