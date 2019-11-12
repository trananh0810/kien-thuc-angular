import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai10HomeComponent } from './bai10-home.component';

describe('Bai10HomeComponent', () => {
  let component: Bai10HomeComponent;
  let fixture: ComponentFixture<Bai10HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai10HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai10HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
