import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Album } from '../interfaces/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumEventsService {
  private albumAddEventSource = new BehaviorSubject( {});
  public albumAddEventObservableSubject = this.albumAddEventSource.asObservable();

  constructor() {}

  emitAddNewAlbum(value: Album): void {
    this.albumAddEventSource.next(value);
  }

}
