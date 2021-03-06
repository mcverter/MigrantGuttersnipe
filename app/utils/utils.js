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
  const { coordinates, name } = shareable;
  return stringToHash(`${coordinates[1]}${coordinates[0]}${name}`);
}

export function isNonEmptyArray(arr) {
  return arr && Array.isArray(arr) && arr.length > 0;
}
