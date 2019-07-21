import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as DraftActions from './draft.actions';
import { getActiveTeam, State } from './draft.reducer';

@Injectable({
    providedIn: 'root'
})
export class DraftFacade {
    activeTeam$ = this.store.pipe(select(getActiveTeam));

    constructor(private store: Store<State>) { }

    initializeDraft() {
        this.store.dispatch(DraftActions.InitDraft());
    }
}