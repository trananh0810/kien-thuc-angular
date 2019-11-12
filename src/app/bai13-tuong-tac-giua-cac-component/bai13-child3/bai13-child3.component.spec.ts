import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai13Child3Component } from './bai13-child3.component';

describe('Bai13Child3Component', () => {
  let component: Bai13Child3Component;
  let fixture: ComponentFixture<Bai13Child3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai13Child3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai13Child3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
