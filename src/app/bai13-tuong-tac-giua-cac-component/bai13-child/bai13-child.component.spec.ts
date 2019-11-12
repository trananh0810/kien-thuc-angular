import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai13ChildComponent } from './bai13-child.component';

describe('Bai13ChildComponent', () => {
  let component: Bai13ChildComponent;
  let fixture: ComponentFixture<Bai13ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai13ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai13ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
