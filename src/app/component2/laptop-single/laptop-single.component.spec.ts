import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopSingleComponent } from './laptop-single.component';

describe('LaptopSingleComponent', () => {
  let component: LaptopSingleComponent;
  let fixture: ComponentFixture<LaptopSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
