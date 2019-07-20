import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Position } from 'src/app/shared/enums/position.enum';

import { State } from '../../+state/reducers';
import { TiersPageActions } from './tiers-page.actions';
import { getPopulatedTiers } from './tiers-page.selectors';

// import { getPlayersForActiveGroup } from './tiers-page.selectors';

@Injectable({
    providedIn: 'root'
})
export class TiersFacade {
    currentGroupPlayers$ = this.store.pipe(select(getPopulatedTiers));

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
}