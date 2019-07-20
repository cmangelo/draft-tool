import { createSelector } from '@ngrx/store';
import { TierModel } from 'src/app/+state/entities/tier/tier.model';

import { GroupModel } from '../../+state/entities/group/group.model';
import { GroupEntityType } from '../../+state/entities/group/group.reducer';
import { PlayerEntityType } from '../../+state/entities/player/player.reducer';
import { TierEntityType } from '../../+state/entities/tier/tier.reducer';
import { entitiesSelector } from '../../+state/reducers';
import { Position } from '../../shared/enums/position.enum';
import { tiersPageSelector } from './tiers-page.reducer';

const getGroups = createSelector(entitiesSelector, state => state.groups.entities);

const getTiers = createSelector(entitiesSelector, state => state.tiers.entities);

const getPlayers = createSelector(entitiesSelector, state => state.players.entities);

export const getActiveTab = createSelector(tiersPageSelector, state => state.activeTab);

const getActiveGroup = createSelector(
	getActiveTab,
	getGroups,
	(activeTab: Position, groups: GroupEntityType) => groups[activeTab]
);

export const getPlayersForActiveGroup = createSelector(
	getActiveGroup,
	getTiers,
	getPlayers,
	(group: GroupModel, tiers: TierEntityType, players: PlayerEntityType) => {
		if (!group || !tiers || !players) return;
		let gt = group.tiers as Array<string>;
		let groupTiers = gt.map(key => tiers[key]);
		let tierPlayers = groupTiers.map((t: TierModel) => {
			let tp = t.players.map(key => players[key]);
			return { ...t, players: tp }
		});
		console.log(tierPlayers)
		return tierPlayers;
	}
)