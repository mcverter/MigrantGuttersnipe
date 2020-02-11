import Tijuana from './tijuana';
import Tapachula from './tapachula';
import { makeKeyFromShareable } from '../utils/utils';

export const allShareables = Tapachula.shareables.concat(Tijuana.shareables);
const sbk = {};

allShareables.forEach(s => {
  sbk[makeKeyFromShareable(s)] = s;
});

export const shareablesByKey = sbk;
export const shareablesByRegion = { Tijuana, Tapachula };
