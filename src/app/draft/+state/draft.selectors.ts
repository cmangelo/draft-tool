import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TeamModel } from 'src/app/+state/entities/team/team.model';
import { entitiesSelector, getPlayers } from 'src/app/+state/reducers';
import { Position } from 'src/app/shared/enums/position.enum';

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
            if (!team.playerRoundMap) return team;
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
);

export const getMyDraftPosition = createSelector(
    getDraftConfig,
    (config) => { if (!config) return; return config.userPosition }
);

export const getMyTeamFillPlayers = createSelector(
    getMyDraftPosition,
    getTeams,
    getPlayers,
    (position, teams, allPlayers) => {
        if (!position || !teams || !allPlayers) return;

        const team = Object.keys(teams).map(key => teams[key]).find(team => team.draftPosition === position);
        if (!team) return;

        let teamPlayers = {};
        for (let round of Object.keys(team.playerRoundMap)) {
            teamPlayers[round] = allPlayers[team.playerRoundMap[round]];
        }
        let x = {
            ...team,
            playerRoundMap: teamPlayers
        };
        return x;
    }
);

export const getMyPlayerPositionMap = createSelector(
    getMyTeamFillPlayers,
    getDraftConfig,
    (myTeam, config) => {

        let positionMap = {
            QB: [],
            RB: [],
            WR: [],
            TE: [],
            FLEX: [],
            BENCH: [],
            K: [],
            DEF: []
        };
        console.log(myTeam, config)
        if (!myTeam || !config) return positionMap;

        Object.keys(myTeam.playerRoundMap).map(key => { return { ...myTeam.playerRoundMap[key], round: key } }).map(player => {
            if (player.position === Position.QB) {
                if (positionMap.QB.length < config.QBs) {
                    positionMap.QB.push(player);
                } else {
                    positionMap.BENCH.push(player);
                }
            }
            if (player.position === Position.RB) {
                if (positionMap.RB.length < config.RBs) {
                    positionMap.RB.push(player);
                } else if (positionMap.FLEX.length < config.FLEX) {
                    positionMap.FLEX.push(player);
                } else {
                    positionMap.BENCH.push(player);
                }
            }
            if (player.position === Position.WR) {
                if (positionMap.WR.length < config.WRs) {
                    positionMap.WR.push(player);
                } else if (positionMap.FLEX.length < config.FLEX) {
                    positionMap.FLEX.push(player);
                } else {
                    positionMap.BENCH.push(player);
                }
            }
            if (player.position === Position.TE) {
                if (positionMap.TE.length < config.TEs) {
                    positionMap.TE.push(player);
                } else if (positionMap.FLEX.length < config.FLEX) {
                    positionMap.FLEX.push(player);
                } else {
                    positionMap.BENCH.push(player);
                }
            }
        });
        console.log(positionMap)
        return positionMap;
    }
)