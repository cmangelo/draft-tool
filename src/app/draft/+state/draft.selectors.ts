import { createSelector } from '@ngrx/store';
import { entitiesSelector } from 'src/app/+state/reducers';

export const getTeams = createSelector(entitiesSelector, state => state.teams.entities);