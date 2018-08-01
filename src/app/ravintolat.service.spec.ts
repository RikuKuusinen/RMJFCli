import { TestBed, inject } from '@angular/core/testing';

import { RavintolatService } from './ravintolat.service';

describe('RavintolatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RavintolatService]
    });
  });

  it('should be created', inject([RavintolatService], (service: RavintolatService) => {
    expect(service).toBeTruthy();
  }));
});
