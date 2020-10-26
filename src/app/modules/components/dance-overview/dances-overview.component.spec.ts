import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DancesOverviewComponent } from './dances-overview.component';

describe('DancesOverviewComponent', () => {
  let component: DancesOverviewComponent;
  let fixture: ComponentFixture<DancesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DancesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DancesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
