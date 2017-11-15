import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratieschermComponent } from './registratiescherm.component';

describe('RegistratieschermComponent', () => {
  let component: RegistratieschermComponent;
  let fixture: ComponentFixture<RegistratieschermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistratieschermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratieschermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
