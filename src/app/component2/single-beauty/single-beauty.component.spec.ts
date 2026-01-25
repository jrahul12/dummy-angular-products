import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBeautyComponent } from './single-beauty.component';

describe('SingleBeautyComponent', () => {
  let component: SingleBeautyComponent;
  let fixture: ComponentFixture<SingleBeautyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBeautyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
