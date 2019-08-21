import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DraftFacade } from './draft/+state/draft.facade';
import { StorageService } from './shared/services/storage.service';
import { TiersFacade } from './tiers/+state/tiers-page.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'draft-kit';
  initialized$ = this.draftFacade.initialized$;
  unsubscribe$ = new Subject();

  constructor(private draftFacade: DraftFacade,
    private router: Router,
    private tiersFacade: TiersFacade,
    private storage: StorageService) { }

  ngOnInit() {
    this.checkStorageForDraftID();
    this.redirectToSetupIfNotInitialized();
    this.tiersFacade.getPlayersForAllPositions();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }

  checkStorageForDraftID() {
    var initialized = !!this.storage.get('draftId');
    this.draftFacade.updateDraftInitialized(initialized);
    if (initialized)
      this.draftFacade.getDraft();
  }

  redirectToSetupIfNotInitialized() {
    this.initialized$.pipe(
      takeUntil(this.unsubscribe$)).subscribe((val) => {
        console.log(val)
        if (!val) {
          this.router.navigateByUrl('setup');
        } else {
          this.router.navigateByUrl('tiers');
        }
      });
  }

}
