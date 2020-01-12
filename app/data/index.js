import tijuana from './tijuana';
import tapachula from './tapachula';
import { makeKeyFromShareable } from '../utils/utils';

const sByKey = {};
tapachula.shareables
  .forEach(s => {
    s.region = 'Tapachula';
    (sByKey[makeKeyFromShareable(s)] = s);
  })

 tijuana.shareables  .forEach(s => {
   s.region = 'Tijuana';
   (sByKey[makeKeyFromShareable(s)] = s);
 })


export const shareablesByKey = sByKey;
export const shareablesByRegion = { tijuana, tapachula };

console.log('sbk', shareablesByKey)
