import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamspelersComponent } from './teamspelers.component';

describe('TeamspelersComponent', () => {
  let component: TeamspelersComponent;
  let fixture: ComponentFixture<TeamspelersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamspelersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamspelersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
