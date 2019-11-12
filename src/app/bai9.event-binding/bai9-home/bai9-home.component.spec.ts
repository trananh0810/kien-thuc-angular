import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai9HomeComponent } from './bai9-home.component';

describe('Bai9HomeComponent', () => {
  let component: Bai9HomeComponent;
  let fixture: ComponentFixture<Bai9HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai9HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai9HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
