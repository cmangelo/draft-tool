import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PlayerActions } from 'src/app/+state/entities/player/player.actions';
import { Position } from 'src/app/shared/enums/position.enum';

import { State } from '../../+state/reducers';
import { TiersPageActions } from './tiers-page.actions';
import { getPopulatedTiers } from './tiers-page.selectors';

@Injectable({
    providedIn: 'root'
})
export class TiersFacade {
    currentGroupPlayers$ = this.store.pipe(select(getPopulatedTiers, { position: Position.RB }));
    QBs$ = this.store.pipe(select(getPopulatedTiers, { position: Position.QB }));
    RBs$ = this.store.pipe(select(getPopulatedTiers, { position: Position.RB }));
    WRs$ = this.store.pipe(select(getPopulatedTiers, { position: Position.WR }));
    TEs$ = this.store.pipe(select(getPopulatedTiers, { position: Position.TE }));
    FLEX$ = this.store.pipe(select(getPopulatedTiers, { position: Position.FLEX }));

    constructor(private store: Store<State>) { }

    updateActiveTab(tab: Position) {
        this.store.dispatch(TiersPageActions.UpdateActiveTab({ tab }));
    }

    getPlayersForPosition(position: Position) {
        this.store.dispatch(TiersPageActions.GetPlayersForPosition({ position }));
    }

    getPlayersForAllPositions() {
        this.store.dispatch(TiersPageActions.GetPlayersForPosition({ position: Position.QB }));
        this.store.dispatch(TiersPageActions.GetPlayersForPosition({ position: Position.RB }));
        this.store.dispatch(TiersPageActions.GetPlayersForPosition({ position: Position.WR }));
        this.store.dispatch(TiersPageActions.GetPlayersForPosition({ position: Position.TE }));
        this.store.dispatch(TiersPageActions.GetPlayersForPosition({ position: Position.FLEX }));
    }

    draftPlayer(playerId: string) {
        this.store.dispatch(TiersPageActions.DraftPlayer({ playerId }));
    }

    resetDrafted() {
        this.store.dispatch(PlayerActions.ResetDrafted());
    }
}