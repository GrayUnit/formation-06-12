import { TestBed } from '@angular/core/testing';

import { MixInterceptor } from './mix.interceptor';

describe('MixInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MixInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MixInterceptor = TestBed.inject(MixInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
