import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai8BindingClassComponent } from './bai8-binding-class.component';

describe('Bai8BindingClassComponent', () => {
  let component: Bai8BindingClassComponent;
  let fixture: ComponentFixture<Bai8BindingClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai8BindingClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai8BindingClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
