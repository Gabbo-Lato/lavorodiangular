import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TF2Component } from './tf2.component';

describe('TF2Component', () => {
  let component: TF2Component;
  let fixture: ComponentFixture<TF2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TF2Component]
    });
    fixture = TestBed.createComponent(TF2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
