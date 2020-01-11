import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the regionPage state domain
 */

const selectRegionPageDomain = state => state.regionPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RegionPage
 */

const makeSelectRegionPage = () =>
  createSelector(
    selectRegionPageDomain,
    substate => substate,
  );

export default makeSelectRegionPage;
export { selectRegionPageDomain };
