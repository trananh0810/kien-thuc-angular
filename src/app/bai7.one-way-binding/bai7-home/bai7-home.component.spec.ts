import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai7HomeComponent } from './bai7-home.component';

describe('Bai7HomeComponent', () => {
  let component: Bai7HomeComponent;
  let fixture: ComponentFixture<Bai7HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai7HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai7HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
