import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeschiedenisdetailComponent } from './geschiedenisdetail.component';

describe('GeschiedenisdetailComponent', () => {
  let component: GeschiedenisdetailComponent;
  let fixture: ComponentFixture<GeschiedenisdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeschiedenisdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeschiedenisdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
