import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
  private alertAddEventSource = new BehaviorSubject({});
  public alertAddEventObservableSubject = this.alertAddEventSource.asObservable();

  constructor() {
  }

  emitAddNewAlertMessage(value): void {
    this.alertAddEventSource.next(value);
  }

}
