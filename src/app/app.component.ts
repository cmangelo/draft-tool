import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DraftFacade } from './draft/+state/draft.facade';
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

  constructor(private draftFacade: DraftFacade, private router: Router, private tiersFacade: TiersFacade) { }

  ngOnInit() {
    this.redirectToSetupIfNotInitialized();
    this.tiersFacade.getPlayersForAllPositions();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }

  redirectToSetupIfNotInitialized() {
    this.initialized$.pipe(
      takeUntil(this.unsubscribe$)).subscribe((val) => {
        console.log(val)
        if (!val)
          this.router.navigateByUrl('setup');
      });
  }

}
