import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai21HomeComponent } from './bai21-home.component';

describe('Bai21HomeComponent', () => {
  let component: Bai21HomeComponent;
  let fixture: ComponentFixture<Bai21HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai21HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai21HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
