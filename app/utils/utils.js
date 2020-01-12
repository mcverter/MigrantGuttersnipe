/* eslint-disable no-bitwise */
export function stringToHash(s) {
  const len = s.length;
  let hash = 0;
  for (let idx = 0; idx < len; idx += 1) {
    hash = ((hash << 5) - hash + s.charCodeAt(idx)) | 0;
  }
  return Math.abs(hash);
}

export function makeKeyFromShareable(shareable) {
  if (!shareable) {
    console.error('no shareable in make key for shareable');
    return '';
  }
  const { coordinates, name } = shareable;
  return stringToHash(`${coordinates[1]}${coordinates[0]}${name}`);
}
