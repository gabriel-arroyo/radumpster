import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningbarComponent } from './warningbar.component';

describe('WarningbarComponent', () => {
  let component: WarningbarComponent;
  let fixture: ComponentFixture<WarningbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
