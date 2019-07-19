import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Position } from 'src/app/shared/enums/position.enum';

import { TiersPageActions } from './tiers-page.actions';
import { TiersState } from './tiers-page.reducer';
import { getPlayersForActiveGroup, getActiveTab } from './tiers-page.selectors';

@Injectable({
    providedIn: 'root'
})
export class TiersFacade {
    currentGroupPlayers$ = this.store.pipe(select(getPlayersForActiveGroup));

    constructor(private store: Store<TiersState>) { }

    updateActiveTab(tab: Position) {
        this.store.dispatch(TiersPageActions.UpdateActiveTab({ tab }));
    }

    getPlayersForPosition(position: Position) {
        this.store.dispatch(TiersPageActions.GetPlayersForPosition({ position }));
    }

    getPlayersForAllPositions() {
        // this.store.dispatch(TiersActions.GetPlayersForAllPositions());
        this.store.dispatch(TiersPageActions.GetPlayersForPosition({ position: Position.QB }));
        this.store.dispatch(TiersPageActions.GetPlayersForPosition({ position: Position.RB }));
        this.store.dispatch(TiersPageActions.GetPlayersForPosition({ position: Position.WR }));
        this.store.dispatch(TiersPageActions.GetPlayersForPosition({ position: Position.TE }));
        this.store.dispatch(TiersPageActions.GetPlayersForPosition({ position: Position.FLEX }));
    }
}