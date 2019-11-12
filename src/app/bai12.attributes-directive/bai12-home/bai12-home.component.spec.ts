import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai12HomeComponent } from './bai12-home.component';

describe('Bai12HomeComponent', () => {
  let component: Bai12HomeComponent;
  let fixture: ComponentFixture<Bai12HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai12HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai12HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
