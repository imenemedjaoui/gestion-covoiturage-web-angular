import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreSearchComponent } from './offre-search.component';

describe('OffreSearchComponent', () => {
  let component: OffreSearchComponent;
  let fixture: ComponentFixture<OffreSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
