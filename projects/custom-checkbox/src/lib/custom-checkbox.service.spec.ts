import { TestBed } from '@angular/core/testing';

import { CustomCheckboxService } from './custom-checkbox.service';

describe('CustomCheckboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomCheckboxService = TestBed.get(CustomCheckboxService);
    expect(service).toBeTruthy();
  });
});
