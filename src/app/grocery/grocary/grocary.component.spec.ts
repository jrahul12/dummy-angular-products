import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocaryComponent } from './grocary.component';

describe('GrocaryComponent', () => {
  let component: GrocaryComponent;
  let fixture: ComponentFixture<GrocaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrocaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrocaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
