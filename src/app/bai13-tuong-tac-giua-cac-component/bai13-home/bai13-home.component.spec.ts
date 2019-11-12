import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai13HomeComponent } from './bai13-home.component';

describe('Bai13HomeComponent', () => {
  let component: Bai13HomeComponent;
  let fixture: ComponentFixture<Bai13HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai13HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai13HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
