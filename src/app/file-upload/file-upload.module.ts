import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxFileDropModule } from 'ngx-file-drop';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload/file-upload.component';



@NgModule({
  declarations: [FileUploadComponent],
  imports: [
    CommonModule,
    NgxFileDropModule,
    FileUploadRoutingModule
  ]
})
export class FileUploadModule { }
