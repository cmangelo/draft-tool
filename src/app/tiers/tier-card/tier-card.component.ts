import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PlayerModel } from '../../+state/entities/player/player.model';

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
  @Output() draftPlayer = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
