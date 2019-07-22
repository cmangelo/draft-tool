import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as DraftActions from './draft.actions';
import { State } from './draft.reducer';
import { getActiveTeam, getDraftConfig, getDraftPickState, getPicksPerRound, getTeamsFillPlayers } from './draft.selectors';

@Injectable({
    providedIn: 'root'
})
export class DraftFacade {
    activeTeam$ = this.store.pipe(select(getActiveTeam));
    teams$ = this.store.pipe(select(getTeamsFillPlayers));
    draftPickState$ = this.store.pipe(select(getDraftPickState));
    picksPerRound$ = this.store.pipe(select(getPicksPerRound));
    draftConfig$ = this.store.pipe(select(getDraftConfig));

    constructor(private store: Store<State>) { }

    initializeDraft() {
        this.store.dispatch(DraftActions.InitDraft());
    }
}