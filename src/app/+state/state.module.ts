import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DraftEffects } from '../draft/+state/draft.effects';
import * as fromDraft from '../draft/+state/draft.reducer';
import * as root from './reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('entities', root.reducers),
    StoreModule.forFeature('draft', fromDraft.reducer),
    EffectsModule.forFeature([DraftEffects]),
  ]
})
export class StateModule { }
