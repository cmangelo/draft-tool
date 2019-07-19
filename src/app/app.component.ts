import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from './+state/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'draft-kit';

  constructor(private store: Store<State>) { }

  ngOnInit() {
    // let players = [
    //   <Player>{
    //   _id: '1',
    //   name: "DeAndre Hopkins",
    //   team: "HOU",
    //   bye: 10,
    //   points: 209.5,
    //   risk: 1,
    //   adp: 1.07,
    //   group: Position.WR,
    //   drafted: false,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    //   notes: "After finishing as the top fantasy wideout in 2017, Hopkins was the WR2 in 2018 and had ZERO bust games in either season. His average stat line from those two seasons: 105 catches / 1475 yards / 12 TDs. Perhaps most important, those two seasons are with young star QB Deshaun Watson. Hopkins should continue to dominate in the prime of his career."
    // },
    // <Player>{
    //   _id: '2',
    //   name: "Julio Jones",
    //   team: "ATL",
    //   bye: 12,
    //   points: 219.5,
    //   risk: 1,
    //   adp: 1.08,
    //   group: 1,
    //   drafted: false,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    //   notes: "After finishing as the top fantasy wideout in 2017, Jones was the WR2 in 2018 and had ZERO bust games in either season. His average stat line from those two seasons: 105 catches / 1475 yards / 12 TDs. Perhaps most important, those two seasons are with young star QB Deshaun Watson. Hopkins should continue to dominate in the prime of his career."
    // }]
    // this.store.dispatch(playerActions.addPlayers({players}))
  }

}
