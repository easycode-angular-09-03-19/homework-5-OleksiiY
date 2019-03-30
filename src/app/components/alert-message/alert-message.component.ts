import {Component, OnInit} from '@angular/core';
import {AlertMessageService} from '../../services/alert-message.service';
import {Album} from '../../interfaces/Album';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {
  public onSuccessDelete;
  public showMessage;
  public isDelete: boolean;
  public isAdded: boolean;
  public isEdited: boolean;
  public isServerError: boolean;

  constructor(
    public alertMessageService: AlertMessageService
  ) {
  }

  ngOnInit() {
    this.alertMessageService.alertAddEventObservableSubject.subscribe((data) => {
      this.onSuccessDelete = data;
      if (this.onSuccessDelete.action === 'add') {
        this.isAdded = true;
        this.showMessage = `Добавление альбома - ${this.onSuccessDelete.id} прошло успешно,с cодержанием - ${this.onSuccessDelete.title}`;
        setTimeout(() => {
          this.showMessage = '';
          this.isAdded = false;
        }, 2000);
      }

      if (this.onSuccessDelete.action === 'delete') {
        this.isDelete = true;
        this.showMessage = `Удаление альбома - ${this.onSuccessDelete.id} прошло успешно,с cодержанием - ${this.onSuccessDelete.title}`;
        setTimeout(() => {
          this.showMessage = '';
          this.isDelete = false;
        }, 2000);
      }

      if (this.onSuccessDelete.action === 'edit') {
        this.isEdited = true;
        this.showMessage = `Редактирование альбома - ${this.onSuccessDelete.id} прошло успешно,с cодержанием - ${this.onSuccessDelete.title}`;
        setTimeout(() => {
          this.showMessage = '';
          this.isEdited = false;
        }, 2000);
      }

      if (this.onSuccessDelete.action === 'ServerError') {
        this.isServerError = true;
        this.showMessage = `Ошибка сервера, удалите Item или нажмите Cancel для продолжения`;
        setTimeout(() => {
          this.showMessage = '';
          this.isServerError = false;
        }, 2500);
      }

    });
  }
}
