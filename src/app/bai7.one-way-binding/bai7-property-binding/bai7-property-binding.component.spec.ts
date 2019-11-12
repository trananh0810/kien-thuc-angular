import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai7PropertyBindingComponent } from './bai7-property-binding.component';

describe('Bai7PropertyBindingComponent', () => {
  let component: Bai7PropertyBindingComponent;
  let fixture: ComponentFixture<Bai7PropertyBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai7PropertyBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai7PropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
