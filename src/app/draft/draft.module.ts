import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DraftRoutingModule } from './draft-routing.module';
import { DraftComponent } from './draft/draft.component';


@NgModule({
  declarations: [DraftComponent],
  imports: [
    CommonModule,
    DraftRoutingModule
  ],
  exports: [DraftComponent]
})
export class DraftModule { }
