import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataEntryRoutingModule } from './data-entry-routing.module';
import { DataEntryComponent } from './data-entry/data-entry.component';


@NgModule({
  declarations: [DataEntryComponent],
  imports: [
    CommonModule,
    FormsModule,
    DataEntryRoutingModule
  ]
})
export class DataEntryModule { }
