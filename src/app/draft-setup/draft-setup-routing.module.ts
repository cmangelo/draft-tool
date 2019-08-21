import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DraftSetupComponent } from './draft-setup/draft-setup.component';


const routes: Routes = [{
  path: 'setup',
  component: DraftSetupComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraftSetupRoutingModule { }
