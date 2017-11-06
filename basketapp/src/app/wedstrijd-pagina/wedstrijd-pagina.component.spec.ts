import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WedstrijdPaginaComponent } from './wedstrijd-pagina.component';

describe('WedstrijdPaginaComponent', () => {
  let component: WedstrijdPaginaComponent;
  let fixture: ComponentFixture<WedstrijdPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedstrijdPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WedstrijdPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
