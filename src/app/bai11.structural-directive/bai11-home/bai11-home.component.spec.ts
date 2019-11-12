import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai11HomeComponent } from './bai11-home.component';

describe('Bai11HomeComponent', () => {
  let component: Bai11HomeComponent;
  let fixture: ComponentFixture<Bai11HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai11HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai11HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
