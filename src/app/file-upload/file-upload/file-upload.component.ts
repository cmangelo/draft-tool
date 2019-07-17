import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';

import { Position } from '../../shared/enums/position.enum';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class FileUploadComponent implements OnInit {
  position: Position = Position.QB;
  lastPosition: Position;
  files: NgxFileDropEntry[] = [];
  isFileOver: boolean;
  positions = Position;

  constructor(private service: FileUploadService) { }

  ngOnInit() {

  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    this.lastPosition = this.position;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          const formData = new FormData()
          formData.append('players', file, droppedFile.relativePath)

          this.service.uploadFile(this.position, formData).subscribe();
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      }
    }
  }
}
