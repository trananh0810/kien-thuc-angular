import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanigationComponent } from './panigation.component';

describe('PanigationComponent', () => {
  let component: PanigationComponent;
  let fixture: ComponentFixture<PanigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
