import { TestBed } from '@angular/core/testing';

import { IwaTestService } from './iwa-test.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IwaTestService', () => {
  let service: IwaTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(IwaTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
