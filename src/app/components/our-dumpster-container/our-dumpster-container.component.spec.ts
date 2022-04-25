import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDumpsterContainerComponent } from './our-dumpster-container.component';

describe('OurDumpsterContainerComponent', () => {
  let component: OurDumpsterContainerComponent;
  let fixture: ComponentFixture<OurDumpsterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurDumpsterContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurDumpsterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
