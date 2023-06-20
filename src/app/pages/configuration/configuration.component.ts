import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { FilesUploadComponent } from 'src/app/shared/files-upload/files-upload.component';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent {
  constructor(private dialogService: NbDialogService) {}

  open() {
    this.dialogService
      .open(FilesUploadComponent, {
        context: 'Este es un mensaje de prueba',
        hasBackdrop: true,
      })
      .onClose.subscribe(() => {});
  }
}
