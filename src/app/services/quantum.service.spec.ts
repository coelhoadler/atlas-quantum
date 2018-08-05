import { TestBed, inject, async, fakeAsync } from '@angular/core/testing';

import { QuantumService } from './quantum.service';

let quantumService: QuantumService;

describe('QuantumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuantumService]
    });

    quantumService = TestBed.get(QuantumService);

  });

  // it('should be created', () => {
  //   expect(quantumService).toBeTruthy();
  // });

  // it('should return something', async(() => {

  // }));

});
