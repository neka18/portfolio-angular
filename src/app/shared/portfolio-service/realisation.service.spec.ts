import { TestBed } from '@angular/core/testing';
import { RealisationService } from './realisation.service';

describe('PresentationService', () => {
  let service: RealisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
