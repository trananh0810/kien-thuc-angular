import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai8HomeComponent } from './bai8-home.component';

describe('Bai8HomeComponent', () => {
  let component: Bai8HomeComponent;
  let fixture: ComponentFixture<Bai8HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai8HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai8HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
