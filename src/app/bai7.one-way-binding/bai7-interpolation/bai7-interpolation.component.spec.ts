import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai7InterpolationComponent } from './bai7-interpolation.component';

describe('Bai7InterpolationComponent', () => {
  let component: Bai7InterpolationComponent;
  let fixture: ComponentFixture<Bai7InterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai7InterpolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai7InterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
