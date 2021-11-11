import { TestBed } from '@angular/core/testing';

import { MiltimediaService } from './miltimedia.service';

describe('MiltimediaService', () => {
  let service: MiltimediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiltimediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
