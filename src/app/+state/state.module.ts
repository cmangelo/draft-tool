import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as root from './reducers';
import * as fromDraft from './features/draft.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DraftEffects } from './features/draft.effects';

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
