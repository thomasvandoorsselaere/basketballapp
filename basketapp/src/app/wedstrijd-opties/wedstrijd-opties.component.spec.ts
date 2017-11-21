import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WedstrijdOptiesComponent } from './wedstrijd-opties.component';

describe('WedstrijdOptiesComponent', () => {
  let component: WedstrijdOptiesComponent;
  let fixture: ComponentFixture<WedstrijdOptiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedstrijdOptiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WedstrijdOptiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
