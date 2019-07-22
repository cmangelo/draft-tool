import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DraftRoutingModule } from './draft-routing.module';
import { DraftComponent } from './draft/draft.component';
import { PickCellComponent } from './pick-cell/pick-cell.component';


@NgModule({
  declarations: [DraftComponent, PickCellComponent],
  imports: [
    CommonModule,
    DraftRoutingModule
  ],
  exports: [DraftComponent]
})
export class DraftModule { }
