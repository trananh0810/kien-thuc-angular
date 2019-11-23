import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai25RouteGuardComponent } from './bai25-route-guard.component';

describe('Bai25RouteGuardComponent', () => {
  let component: Bai25RouteGuardComponent;
  let fixture: ComponentFixture<Bai25RouteGuardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai25RouteGuardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai25RouteGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
