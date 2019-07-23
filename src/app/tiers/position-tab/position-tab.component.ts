import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { TierModel } from '../../+state/entities/tier/tier.model';
import { Position } from '../../shared/enums/position.enum';
import { PlayersService } from '../../shared/services/players.service';
import { TiersFacade } from '../../tiers/+state/tiers-page.facade';

@Component({
  selector: 'app-position-tab',
  templateUrl: './position-tab.component.html',
  styleUrls: ['./position-tab.component.less']
})
export class PositionTabComponent implements OnInit {
  @Input() position: Position;
  @Input() tiers$: Observable<Array<TierModel>>;
  @Output() draftPlayer = new EventEmitter<string>();
  positions = Position;

  constructor(private playerService: PlayersService, private facade: TiersFacade) { }

  ngOnInit() {
  }

}
