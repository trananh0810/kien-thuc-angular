import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai24HomeComponent } from './bai24-home.component';

describe('Bai24HomeComponent', () => {
  let component: Bai24HomeComponent;
  let fixture: ComponentFixture<Bai24HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai24HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai24HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
