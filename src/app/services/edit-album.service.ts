import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditAlbumService {
  private albumEditEventSource = new BehaviorSubject( {});
  public albumEditEventObservableSubject = this.albumEditEventSource.asObservable();

  constructor() { }

  emitChangeOnEditForms(value): void {
    this.albumEditEventSource.next(value);
  }
}
