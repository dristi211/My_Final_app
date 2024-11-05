import { TestBed } from '@angular/core/testing';

import { DristiKhondkar0811195InfoService } from './dristi-khondkar-0811195-info.service';

describe('DristiKhondkar0811195InfoService', () => {
  let service: DristiKhondkar0811195InfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DristiKhondkar0811195InfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
