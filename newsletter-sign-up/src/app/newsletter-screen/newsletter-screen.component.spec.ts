import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterScreenComponent } from './newsletter-screen.component';

describe('NewsletterScreenComponent', () => {
  let component: NewsletterScreenComponent;
  let fixture: ComponentFixture<NewsletterScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsletterScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsletterScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
