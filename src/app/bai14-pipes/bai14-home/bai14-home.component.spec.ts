import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai14HomeComponent } from './bai14-home.component';

describe('Bai14HomeComponent', () => {
  let component: Bai14HomeComponent;
  let fixture: ComponentFixture<Bai14HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai14HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai14HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
