/*
 *
 * RegionPage actions
 *
 */

import { LOCATION_CHANGE } from 'react-router-redux';
import { DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
