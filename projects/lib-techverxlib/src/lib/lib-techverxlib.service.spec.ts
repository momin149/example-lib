import { TestBed } from '@angular/core/testing';

import { LibTechverxlibService } from './lib-techverxlib.service';

describe('LibTechverxlibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibTechverxlibService = TestBed.get(LibTechverxlibService);
    expect(service).toBeTruthy();
  });
});
