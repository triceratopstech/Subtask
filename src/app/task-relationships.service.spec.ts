import { TestBed } from '@angular/core/testing';

import { TaskRelationshipsService } from './task-relationships.service';

describe('TaskRelationshipsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskRelationshipsService = TestBed.get(TaskRelationshipsService);
    expect(service).toBeTruthy();
  });
});
