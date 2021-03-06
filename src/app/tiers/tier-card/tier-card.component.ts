import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TierModel } from 'src/app/+state/entities/tier/tier.model';

import { PlayerModel } from '../../+state/entities/player/player.model';
import { Position } from '../../shared/enums/position.enum';

@Component({
  selector: 'app-tier-card',
  templateUrl: './tier-card.component.html',
  styleUrls: ['./tier-card.component.less']
})
export class TierCardComponent implements OnInit {
  @Input() players: Array<PlayerModel>;
  @Input() tier: number;
  @Input() startingAtRank: number;
  @Input() hideTierNumber: boolean;
  @Input() tiers: Array<TierModel>;
  @Input() position: Position;
  @Input() query$: Observable<string>;
  @Output() draftPlayer = new EventEmitter<string>();
  positions = Position;

  constructor() { }

  ngOnInit() {
  }

}
