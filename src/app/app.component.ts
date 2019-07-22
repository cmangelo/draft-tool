import { Component } from '@angular/core';

import { DraftFacade } from './draft/+state/draft.facade';
import { TiersFacade } from './tiers/+state/tiers-page.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'draft-kit';

  constructor(private draftFacade: DraftFacade, private tiersFacade: TiersFacade) { }

  ngOnInit() {
    this.draftFacade.initializeDraft();
    this.tiersFacade.getPlayersForAllPositions();
  }

}
