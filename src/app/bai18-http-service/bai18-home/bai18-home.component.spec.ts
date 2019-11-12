import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai18HomeComponent } from './bai18-home.component';

describe('Bai18HomeComponent', () => {
  let component: Bai18HomeComponent;
  let fixture: ComponentFixture<Bai18HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai18HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai18HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
