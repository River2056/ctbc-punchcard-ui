import { TestBed } from '@angular/core/testing';

import { WorkDayDetailsService } from './work-day-details.service';

describe('WorkDayDetailsService', () => {
  let service: WorkDayDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkDayDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
