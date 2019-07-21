import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as DraftActions from './draft.actions';
import { State } from './draft.reducer';

@Injectable({
    providedIn: 'root'
})
export class DraftFacade {

    constructor(private store: Store<State>) { }

    initializeDraft() {
        this.store.dispatch(DraftActions.InitDraft());
    }
}