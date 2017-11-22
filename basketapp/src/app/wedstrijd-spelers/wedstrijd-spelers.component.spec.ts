import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WedstrijdSpelersComponent } from './wedstrijd-spelers.component';

describe('WedstrijdSpelersComponent', () => {
  let component: WedstrijdSpelersComponent;
  let fixture: ComponentFixture<WedstrijdSpelersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedstrijdSpelersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WedstrijdSpelersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
