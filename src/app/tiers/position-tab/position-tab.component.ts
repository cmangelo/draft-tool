import { Component, Input, OnInit } from '@angular/core';
import { TierModel } from 'src/app/+state/entities/tier/tier.model';
import { PlayersService } from 'src/app/shared/services/players.service';
import { TiersFacade } from 'src/app/tiers/+state/tiers-page.facade';

import { Position } from '../../shared/enums/position.enum';

@Component({
  selector: 'app-position-tab',
  templateUrl: './position-tab.component.html',
  styleUrls: ['./position-tab.component.less']
})
export class PositionTabComponent implements OnInit {
  @Input() position: Position;
  tiers: Array<TierModel>;
  positions = Position;
  currentGroupPlayers$ = this.facade.currentGroupPlayers$;

  constructor(private playerService: PlayersService, private facade: TiersFacade) { }

  ngOnInit() {
    // this.playerService.getPlayerByPosition(this.position).subscribe(data => {
    //   this.tiers = data;
    // });
    // this.playerService.updatePlayer('5d2e9822d5477953c4fef11a', { owner: 'Cma', draftedRound: 3, draftedPick: 4 }).subscribe();
    this.facade.getPlayersForPosition(this.position);
    // this.currentGroupPlayers$.pipe(tap(res => console.log(res)));
    // this.facade.getPlayersForAllPositions();
  }

}
