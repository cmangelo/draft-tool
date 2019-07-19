import { createSelector } from '@ngrx/store';

import { groupEntitySelector, GroupEntityType } from '../../+state/entities/group/group.reducer';
import { playerEntitySelector, PlayerEntityType } from '../../+state/entities/player/player.reducer';
import { tierEntitySelector, TierEntityType } from '../../+state/entities/tier/tier.reducer';
import { tiersPageSelector } from './tiers-page.reducer';
import { Position } from '../../shared/enums/position.enum';
import { GroupModel } from '../../+state/entities/group/group.model';

const getGroups = createSelector(groupEntitySelector, state => state.entities);

const getTiers = createSelector(tierEntitySelector, state => state.entities);

const getPlayers = createSelector(playerEntitySelector, state => state.entities);

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
		console.log(group, tiers, players)
		let groupTiers = Object.keys(group.tiers).map(key => tiers[key]);
		let tierPlayers = groupTiers.map(tier => Object.keys(groupTiers).map(key => players[key]));
		// group.tiers = groupTiers;
		console.log(groupTiers, tierPlayers)
		return groupTiers; 
	}
)