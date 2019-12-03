import { TestBed } from '@angular/core/testing';

import { EditorasService } from './editoras.service';

describe('EditorasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditorasService = TestBed.get(EditorasService);
    expect(service).toBeTruthy();
  });
});
