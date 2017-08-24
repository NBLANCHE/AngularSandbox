import { TestBed, inject } from '@angular/core/testing';

import { DragulaDNDService } from './dragula-dnd.service';

describe('DragulaDNDService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragulaDNDService]
    });
  });

  it('should be created', inject([DragulaDNDService], (service: DragulaDNDService) => {
    expect(service).toBeTruthy();
  }));
});
