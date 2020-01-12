import tijuana from './tijuana';
import tapachula from './tapachula';
import {makeKeyFromShareable} from '../utils/utils';

let sByKey = {};
tapachula.shareables
  .concat(tijuana.shareables)
  .forEach(s=>sByKey[makeKeyFromShareable(s)]=s);

export const shareablesByKey = sByKey;
export const shareablesByRegion = {tijuana, tapachula};

console.log(shareablesByKey, shareablesByRegion);
