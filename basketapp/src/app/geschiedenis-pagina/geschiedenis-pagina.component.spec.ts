import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeschiedenisPaginaComponent } from './geschiedenis-pagina.component';

describe('GeschiedenisPaginaComponent', () => {
  let component: GeschiedenisPaginaComponent;
  let fixture: ComponentFixture<GeschiedenisPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeschiedenisPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeschiedenisPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
