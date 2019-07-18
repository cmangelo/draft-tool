import { Component, Input, OnInit } from '@angular/core';

import { Player } from '../../shared/models/player.interface';

@Component({
  selector: 'app-tier-card',
  templateUrl: './tier-card.component.html',
  styleUrls: ['./tier-card.component.less']
})
export class TierCardComponent implements OnInit {
  @Input() players: Array<Player>;
  @Input() tier: number;
  @Input() startingAtRank: number;
  @Input() hideTierNumber: boolean;

  constructor() { }

  ngOnInit() {
  }

}
