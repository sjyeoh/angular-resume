import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesonalDetailsComponent } from './pesonal-details.component';

describe('PesonalDetailsComponent', () => {
  let component: PesonalDetailsComponent;
  let fixture: ComponentFixture<PesonalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesonalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
