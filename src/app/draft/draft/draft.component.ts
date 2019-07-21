import { Component, OnInit } from '@angular/core';

import { DraftFacade } from '../+state/draft.facade';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.less']
})
export class DraftComponent implements OnInit {
  activeTeam$ = this.facade.activeTeam$;

  constructor(private facade: DraftFacade) { }

  ngOnInit() {
    this.facade.initializeDraft();
  }

}
