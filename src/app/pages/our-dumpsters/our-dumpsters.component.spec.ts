import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDumpstersComponent } from './our-dumpsters.component';

describe('OurDumpstersComponent', () => {
  let component: OurDumpstersComponent;
  let fixture: ComponentFixture<OurDumpstersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurDumpstersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurDumpstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
