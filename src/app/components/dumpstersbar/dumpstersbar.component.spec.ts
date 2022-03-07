import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpstersbarComponent } from './dumpstersbar.component';

describe('DumpstersbarComponent', () => {
  let component: DumpstersbarComponent;
  let fixture: ComponentFixture<DumpstersbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumpstersbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DumpstersbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
