import { TestBed } from '@angular/core/testing';

import { RSVPService } from './rsvp-service.service';

describe('StravaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RSVPService = TestBed.get(RSVPService);
    expect(service).toBeTruthy();
  });
});
