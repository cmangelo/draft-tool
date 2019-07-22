import { Component, Input, OnInit } from '@angular/core';
import { PlayerModel } from 'src/app/+state/entities/player/player.model';

@Component({
  selector: 'app-pick-cell',
  templateUrl: './pick-cell.component.html',
  styleUrls: ['./pick-cell.component.less']
})
export class PickCellComponent implements OnInit {
  @Input() player: PlayerModel;

  constructor() { }

  ngOnInit() {
  }

}
