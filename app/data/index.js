import tijuana from './tijuana';
import tapachula from './tapachula';

const makeRegionalShareables = (shareable, region) => {
  shareable.region = region;
  return shareable;
}
let TAP =
  (tapachula.shareables.map(
    s => makeRegionalShareables(s, 'Tapachula')))
console.log('sbk 1', TAP)
let TIJ =
  tijuana.shareables.map(
    s => makeRegionalShareables(s, 'Tijuana'));
console.log('sbk 2', TIJ)

export const shareablesByKey = [...TAP, ...TIJ];
export const shareablesByRegion = { tijuana, tapachula };
