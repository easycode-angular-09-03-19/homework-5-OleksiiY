import { TestBed } from '@angular/core/testing';

import { EditAlbum.ServiceService } from './edit-album.service.service';

describe('EditAlbum.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditAlbum.ServiceService = TestBed.get(EditAlbum.ServiceService);
    expect(service).toBeTruthy();
  });
});
