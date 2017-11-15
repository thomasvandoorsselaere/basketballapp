import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginschermComponent } from './loginscherm.component';

describe('LoginschermComponent', () => {
  let component: LoginschermComponent;
  let fixture: ComponentFixture<LoginschermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginschermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginschermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
