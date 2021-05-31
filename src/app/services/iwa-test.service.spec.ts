import { TestBed } from '@angular/core/testing';

import { IwaTestService } from './iwa-test.service';

describe('IwaTestService', () => {
  let service: IwaTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IwaTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
