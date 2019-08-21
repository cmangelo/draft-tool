import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DraftConfigRequest } from 'src/app/draft-setup/models/draft-config.interface';
import { TiersPageActions } from 'src/app/tiers/+state/tiers-page.actions';

import * as DraftActions from './draft.actions';
import { State } from './draft.reducer';
import {
    getActiveTeam,
    getDraftConfig,
    getDraftPickState,
    getInitialized,
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
    initialized$ = this.store.pipe(select(getInitialized));

    constructor(private store: Store<State>) { }

    initializeDraft(config: DraftConfigRequest) {
        this.store.dispatch(DraftActions.InitDraft({ config }));
    }

    getDraft() {
        this.store.dispatch(DraftActions.GetDraft());
    }

    updateQuery(query: string) {
        this.store.dispatch(DraftActions.QueryUpdate({ query }));
    }

    updateDraftInitialized(initialized: boolean) {
        this.store.dispatch(DraftActions.UpdateDraftInitialized({ initialized }));
    }

    draftDefense() {
        this.store.dispatch(TiersPageActions.DraftPlayer({ playerId: '-1' }));
    }

    draftKicker() {
        this.store.dispatch(TiersPageActions.DraftPlayer({ playerId: '-2' }));
    }
}