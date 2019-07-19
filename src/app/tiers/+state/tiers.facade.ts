import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Position } from 'src/app/shared/enums/position.enum';

import { TiersActions } from './tiers.actions';
import { TiersState } from './tiers.reducer';

@Injectable({
    providedIn: 'root'
})
export class TiersFacade {

    constructor(private store: Store<TiersState>) { }

    updateActiveTab(tab: Position) {
        this.store.dispatch(TiersActions.UpdateActiveTab({ tab }));
    }

    getPlayersForPosition(position: Position) {
        this.store.dispatch(TiersActions.GetPlayersForPosition({ position }));
    }

    getPlayersForAllPositions() {
        // this.store.dispatch(TiersActions.GetPlayersForAllPositions());
        this.store.dispatch(TiersActions.GetPlayersForPosition({ position: Position.QB }));
        this.store.dispatch(TiersActions.GetPlayersForPosition({ position: Position.RB }));
        this.store.dispatch(TiersActions.GetPlayersForPosition({ position: Position.WR }));
        this.store.dispatch(TiersActions.GetPlayersForPosition({ position: Position.TE }));
        this.store.dispatch(TiersActions.GetPlayersForPosition({ position: Position.FLEX }));
    }
}