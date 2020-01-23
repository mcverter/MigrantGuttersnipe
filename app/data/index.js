import tijuana from './tijuana';
import tapachula from './tapachula';

const makeRegionalShareables = (shareable, region) => {
  shareable.region = region;
  return shareable;
};
const TAP = tapachula.shareables.map(s => makeRegionalShareables(s, 'Tapachula'));
const TIJ = tijuana.shareables.map(s => makeRegionalShareables(s, 'Tijuana'));

export const shareablesByKey = [...TAP, ...TIJ];
export const shareablesByRegion = { tijuana, tapachula };
