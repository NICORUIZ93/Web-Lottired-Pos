import {Component} from '@angular/core';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss'],
})
export class FilesUploadComponent {
  selectedFiles: File[] = [];

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent): void {
    console.log('hola onDrop');
    event.preventDefault();
    event.stopPropagation();
    this.selectedFiles = this.getValidFiles(event.dataTransfer?.files);
  }

  getValidFiles(files: FileList | null): File[] {
    const validFiles: File[] = [];
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file && this.isValidFileType(file.type)) {
          validFiles.push(file);
        }
      }
    }
    return validFiles;
  }

  isValidFileType(fileType: string): boolean {
    return true;
  }

  uploadFiles(): void {
    console.log('hola uploadFiles');
    console.log(this.selectedFiles.length);
  }

  onFileSelected(event: any) {
    console.log(event.target.files);
    this.selectedFiles = event.target.files;
  }
}
