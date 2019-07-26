import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchPipe } from './pipes/search.pipe';
import { FilteredLengthPipe } from './pipes/filtered-length.pipe';



@NgModule({
  declarations: [SearchPipe, FilteredLengthPipe],
  imports: [
    CommonModule
  ],
  exports: [SearchPipe, FilteredLengthPipe]
})
export class SharedModule { }
