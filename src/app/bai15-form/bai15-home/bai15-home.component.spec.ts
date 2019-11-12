import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai15HomeComponent } from './bai15-home.component';

describe('Bai15HomeComponent', () => {
  let component: Bai15HomeComponent;
  let fixture: ComponentFixture<Bai15HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai15HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai15HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
