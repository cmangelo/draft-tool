import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TeamModel } from 'src/app/+state/entities/team/team.model';
import { entitiesSelector, getPlayers } from 'src/app/+state/reducers';

import { State } from './draft.reducer';

export const draftSelector = createFeatureSelector<State>('draft');

export const getPick = createSelector(draftSelector, state => state.pick);
export const getRound = createSelector(draftSelector, state => state.round);
export const getPicksPerRound = createSelector(draftSelector, state => state.picksPerRound);
export const getOrderUp = createSelector(draftSelector, state => state.orderUp);
export const getDraftConfig = createSelector(draftSelector, state => state.config);
export const getTeams = createSelector(entitiesSelector, state => state.teams.entities);

export const getDraftPickState = createSelector(
    getPick,
    getRound,
    getOrderUp,
    (pick, round, orderUp) => {
        return { pick, round, orderUp };
    }
)

export const getActiveTeam = createSelector(
    getOrderUp,
    getTeams,
    (orderUp, teams) => {
        if (!teams) return;
        return Object.keys(teams).map(key => teams[key]).find(x => x.draftPosition === orderUp);
    }
);

export const getSortedTeams = createSelector(
    getTeams,
    (teams) => {
        if (!teams) return [];

        let teamsArr = Object.keys(teams).map(key => teams[key]) as Array<TeamModel>;
        return teamsArr.sort((a, b) => a.draftPosition > b.draftPosition ? 1 : -1);
    }
)

export const getTeamsFillPlayers = createSelector(
    getSortedTeams,
    getPlayers,
    (teams, players) => {
        if (!teams || !players) return;

        return teams.map(team => {
            // if (!team.players) return team;
            // let teamPlayers = [...team.players] as Array<string>;
            // return {
            //     ...team,
            //     players: teamPlayers.map(playerId => players[playerId])
            // }
            if (!team.playerRoundMap) return team;
            // let players = Object.keys(team.playerRoundMap).map(round => team.playerRoundMap[round])
            let playerss = {};
            for (let round of Object.keys(team.playerRoundMap)) {
                playerss[round] = players[team.playerRoundMap[round]];
            }
            return {
                ...team,
                playerRoundMap: playerss
            }
        });
    }
)