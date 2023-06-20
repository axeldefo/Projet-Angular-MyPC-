import { TestBed } from '@angular/core/testing';
import { OrdiService } from './ordi-service.service';

describe('OrdiService', () => {
  let service: OrdiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
