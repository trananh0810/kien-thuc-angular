import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai13Child2Component } from './bai13-child2.component';

describe('Bai13Child2Component', () => {
  let component: Bai13Child2Component;
  let fixture: ComponentFixture<Bai13Child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai13Child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai13Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
