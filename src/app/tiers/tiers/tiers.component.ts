import { Component, OnInit } from '@angular/core';

import { TiersFacade } from '../+state/tiers-page.facade';
import { PlayerModel } from '../../+state/entities/player/player.model';
import { Position } from '../../shared/enums/position.enum';

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html',
  styleUrls: ['./tiers.component.less']
})
export class TiersComponent implements OnInit {
  positions = Position;
  players: Array<PlayerModel>;

  constructor(private facade: TiersFacade) { }

  ngOnInit() {
  }


  updateTab(activeTab: any) {
    const newTab = activeTab.nextId;
    this.facade.updateActiveTab(<Position>parseInt(newTab[newTab.length - 1]));
  }

}
