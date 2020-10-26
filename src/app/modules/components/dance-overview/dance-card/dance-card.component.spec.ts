import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceCardComponent } from './dance-card.component';

describe('DanceCardComponent', () => {
  let component: DanceCardComponent;
  let fixture: ComponentFixture<DanceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
