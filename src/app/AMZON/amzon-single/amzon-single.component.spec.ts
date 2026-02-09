import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmzonSingleComponent } from './amzon-single.component';

describe('AmzonSingleComponent', () => {
  let component: AmzonSingleComponent;
  let fixture: ComponentFixture<AmzonSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmzonSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmzonSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
