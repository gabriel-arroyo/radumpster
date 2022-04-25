import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDumpsterItemComponent } from './our-dumpster-item.component';

describe('OurDumpsterItemComponent', () => {
  let component: OurDumpsterItemComponent;
  let fixture: ComponentFixture<OurDumpsterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurDumpsterItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurDumpsterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
