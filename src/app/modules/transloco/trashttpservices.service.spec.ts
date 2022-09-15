import { TestBed } from '@angular/core/testing';

import { TrashttpservicesService } from './trashttpservices.service';

describe('TrashttpservicesService', () => {
  let service: TrashttpservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrashttpservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
