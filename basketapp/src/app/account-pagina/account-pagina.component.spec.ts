import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPaginaComponent } from './account-pagina.component';

describe('AccountPaginaComponent', () => {
  let component: AccountPaginaComponent;
  let fixture: ComponentFixture<AccountPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
