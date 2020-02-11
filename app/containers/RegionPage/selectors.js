import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the nuRegionPage state domain
 */

const selectNuRegionPageDomain = state => state.nuRegionPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by NuRegionPage
 */

const makeSelectNuRegionPage = () =>
  createSelector(
    selectNuRegionPageDomain,
    substate => substate,
  );

export default makeSelectNuRegionPage;
export { selectNuRegionPageDomain };
