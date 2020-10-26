import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DancePanelComponent } from './dance-panel.component';

describe('DancePanelComponent', () => {
  let component: DancePanelComponent;
  let fixture: ComponentFixture<DancePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DancePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DancePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
