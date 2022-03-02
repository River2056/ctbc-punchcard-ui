import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDayDetailsComponent } from './work-day-details.component';

describe('WorkDayDetailsComponent', () => {
  let component: WorkDayDetailsComponent;
  let fixture: ComponentFixture<WorkDayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkDayDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
