import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DraftComponent } from './draft/draft.component';


const routes: Routes = [{
  path: 'draft',
  component: DraftComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraftRoutingModule { }
