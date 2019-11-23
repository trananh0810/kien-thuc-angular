import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai24Tab2Component } from './bai24-tab2.component';

describe('Bai24Tab2Component', () => {
  let component: Bai24Tab2Component;
  let fixture: ComponentFixture<Bai24Tab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai24Tab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai24Tab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
