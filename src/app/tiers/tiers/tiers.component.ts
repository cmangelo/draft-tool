import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { TiersFacade } from '../+state/tiers-page.facade';
import { PlayerModel } from '../../+state/entities/player/player.model';
import { Position } from '../../shared/enums/position.enum';

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html',
  styleUrls: ['./tiers.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TiersComponent implements OnInit {
  positions = Position;
  players: Array<PlayerModel>;

  constructor(private facade: TiersFacade) { }

  ngOnInit() {
    this.facade.updateActiveTab(Position.QB);
    //todo find a way to stay on whatever tab we were on whenever we left the page when we come back
  }

  updateTab(activeTab: any) {
    const newTab = activeTab.nextId;
    this.facade.updateActiveTab(<Position>parseInt(newTab[newTab.length - 1]) % 5);
  }

  draftPlayer(playerId: string) {
    this.facade.draftPlayer(playerId);
  }

  resetDrafted() {
    this.facade.resetDrafted();
  }
}
