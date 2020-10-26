import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DanceDetailsComponent } from './dance-details.component';

describe('DanceDetailsComponent', () => {
  let component: DanceDetailsComponent;
  let fixture: ComponentFixture<DanceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
