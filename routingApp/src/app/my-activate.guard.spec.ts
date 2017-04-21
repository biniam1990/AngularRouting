import { TestBed, async, inject } from '@angular/core/testing';

import { MyActivateGuard } from './my-activate.guard';

describe('MyActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyActivateGuard]
    });
  });

  it('should ...', inject([MyActivateGuard], (guard: MyActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
