import {Component, OnInit} from '@angular/core';
import {AlbumsService} from '../../services/albums.service';
import {AlbumEventsService} from '../../services/album-events.service';
import {Album} from '../../interfaces/Album';
import {AlertMessageService} from '../../services/alert-message.service';
import {EditAlbumService} from '../../services/edit-album.service';

@Component({
  selector: 'app-add-album-form',
  templateUrl: './add-album-form.component.html',
  styleUrls: ['./add-album-form.component.css']
})
export class AddAlbumFormComponent implements OnInit {
  album = {
    title: ''
  };
  isEdited = false;
  formInput: Album;
  isEditedClicked: boolean;


  constructor(
    public albumService: AlbumsService,
    public albumEvents: AlbumEventsService,
    public alertMessageService: AlertMessageService,
    public editAlbumService: EditAlbumService
  ) {
  }

  ngOnInit() {
    this.editAlbumService.albumEditEventObservableSubject.subscribe((data: Album) => {
      if (Object.keys(data).length !== 0) {
        this.isEdited = true;
        // @ts-ignore
        this.formInput = data;
      } else {
        this.isEdited = false;
      }
    });

  }

  onFormSubmit(form) {

    const newAlbum = {
      userId: 1,
      title: this.album.title
    };
    this.albumService.addNewAlbum(newAlbum).subscribe((data: Album) => {
      this.albumEvents.emitAddNewAlbum(data);
      const addAlbumAlert: any = data;
      addAlbumAlert.action = 'add';
      this.alertMessageService.emitAddNewAlertMessage(addAlbumAlert);
      form.resetForm();
    });
  }

  onEditFormSubmit(form) {
    this.albumService.editAlbum(this.formInput).subscribe((data: Album) => {
      this.editAlbumService.emitChangeOnEditForms(data);
      this.isEdited = false;
      const addAlbumAlert: any = data;
      addAlbumAlert.action = 'edit';
      this.alertMessageService.emitAddNewAlertMessage(addAlbumAlert);
      form.reset();
    }, (err) => {
      console.log(err);
      this.formInput.title = 'Ошибка сервера';
      this.isEdited = false;
    });
  }
}
