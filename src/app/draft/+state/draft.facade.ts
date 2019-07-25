import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as DraftActions from './draft.actions';
import { State } from './draft.reducer';
import {
    getActiveTeam,
    getDraftConfig,
    getDraftPickState,
    getLast3Picks,
    getMyPlayerPositionMap,
    getPicksPerRound,
    getPlayerCounts,
    getTeamsFillPlayers,
} from './draft.selectors';

@Injectable({
    providedIn: 'root'
})
export class DraftFacade {
    activeTeam$ = this.store.pipe(select(getActiveTeam));
    teams$ = this.store.pipe(select(getTeamsFillPlayers));
    draftPickState$ = this.store.pipe(select(getDraftPickState));
    picksPerRound$ = this.store.pipe(select(getPicksPerRound));
    draftConfig$ = this.store.pipe(select(getDraftConfig));
    myTeam$ = this.store.pipe(select(getMyPlayerPositionMap));
    playerCount$ = this.store.pipe(select(getPlayerCounts));
    last3Picks$ = this.store.pipe(select(getLast3Picks));

    constructor(private store: Store<State>) { }

    initializeDraft() {
        this.store.dispatch(DraftActions.InitDraft());
    }
}