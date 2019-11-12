import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai16HomeComponent } from './bai16-home.component';

describe('Bai6HomeComponent', () => {
  let component: Bai16HomeComponent;
  let fixture: ComponentFixture<Bai16HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai16HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai16HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
