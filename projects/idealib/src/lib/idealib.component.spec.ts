import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdealibComponent } from './idealib.component';

describe('IdealibComponent', () => {
  let component: IdealibComponent;
  let fixture: ComponentFixture<IdealibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdealibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdealibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
