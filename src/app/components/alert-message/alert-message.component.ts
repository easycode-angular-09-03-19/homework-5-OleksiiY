import {Component, OnInit} from '@angular/core';
import {AlertMessageService} from '../../services/alert-message.service';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {
  onSuccessDelete;
  showMessage;
  isDelete: boolean;
  isAdded: boolean;
  isEdited: boolean;
  isServerError: boolean;

  constructor(
    public alertMessageService: AlertMessageService
  ) {
  }

  ngOnInit() {
    this.alertMessageService.alertAddEventObservableSubject.subscribe((data) => {
      this.onSuccessDelete = data;
      switch (this.onSuccessDelete.action) {
        case 'add':
          this.isAdded = true;
          this.showMessage = `Добавление альбома - ${this.onSuccessDelete.id} прошло успешно,с cодержанием - ${this.onSuccessDelete.title}`;
          setTimeout(() => {
            this.showMessage = '';
            this.isAdded = false;
          }, 2000);
          break;
        case 'edit':
          this.isEdited = true;
          this.showMessage = `Редактирование альбома - ${this.onSuccessDelete.id} прошло успешно,с cодержанием - ${this.onSuccessDelete.title}`;
          setTimeout(() => {
            this.showMessage = '';
            this.isEdited = false;
          }, 2000);
          break;
        case 'delete' :
          this.isDelete = true;
          this.showMessage = `Удаление альбома - ${this.onSuccessDelete.id} прошло успешно,с cодержанием - ${this.onSuccessDelete.title}`;
          setTimeout(() => {
            this.showMessage = '';
            this.isDelete = false;
          }, 2000);
          break;
        case 'ServerError' :
          this.isServerError = true;
          this.showMessage = `Ошибка сервера, удалите Item или нажмите Cancel для продолжения`;
          setTimeout(() => {
            this.showMessage = '';
            this.isServerError = false;
          }, 2500);
          break;
        default:
          break;

      }

    });
  }
}
