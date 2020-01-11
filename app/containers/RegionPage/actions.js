/*
 *
 * RegionPage actions
 *
 */

import { DEFAULT_ACTION } from './constants';
import { LOCATION_CHANGE } from 'react-router-redux'


export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
