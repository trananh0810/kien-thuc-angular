import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai8BindingStyleComponent } from './bai8-binding-style.component';

describe('Bai8BindingStyleComponent', () => {
  let component: Bai8BindingStyleComponent;
  let fixture: ComponentFixture<Bai8BindingStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai8BindingStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai8BindingStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
