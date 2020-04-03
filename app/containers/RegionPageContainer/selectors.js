import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the regionPageContainer state domain
 */

const selectRegionPageContainerDomain = state =>
  state.regionPageContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RegionPageContainer
 */

const makeSelectRegionPageContainer = () =>
  createSelector(
    selectRegionPageContainerDomain,
    substate => substate,
  );

export default makeSelectRegionPageContainer;
export { selectRegionPageContainerDomain };
