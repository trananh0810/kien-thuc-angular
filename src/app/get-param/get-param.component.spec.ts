import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetParamComponent } from './get-param.component';

describe('GetParamComponent', () => {
  let component: GetParamComponent;
  let fixture: ComponentFixture<GetParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
