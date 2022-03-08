import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpsterComponent } from './dumpster.component';

describe('DumpsterComponent', () => {
  let component: DumpsterComponent;
  let fixture: ComponentFixture<DumpsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumpsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DumpsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
