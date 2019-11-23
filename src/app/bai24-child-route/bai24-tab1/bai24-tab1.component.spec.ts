import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai24Tab1Component } from './bai24-tab1.component';

describe('Bai24Tab1Component', () => {
  let component: Bai24Tab1Component;
  let fixture: ComponentFixture<Bai24Tab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai24Tab1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai24Tab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
