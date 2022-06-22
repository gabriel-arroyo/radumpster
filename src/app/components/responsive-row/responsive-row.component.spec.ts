import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveRowComponent } from './responsive-row.component';

describe('ResponsiveRowComponent', () => {
  let component: ResponsiveRowComponent;
  let fixture: ComponentFixture<ResponsiveRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
