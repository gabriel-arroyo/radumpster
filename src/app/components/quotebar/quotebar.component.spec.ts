import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotebarComponent } from './quotebar.component';

describe('QuotebarComponent', () => {
  let component: QuotebarComponent;
  let fixture: ComponentFixture<QuotebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
