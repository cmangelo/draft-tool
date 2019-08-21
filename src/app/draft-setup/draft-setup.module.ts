import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DraftSetupRoutingModule } from './draft-setup-routing.module';
import { DraftSetupComponent } from './draft-setup/draft-setup.component';


@NgModule({
  declarations: [DraftSetupComponent],
  imports: [
    CommonModule,
    FormsModule,
    DraftSetupRoutingModule
  ]
})
export class DraftSetupModule { }
