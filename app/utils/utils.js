/* eslint-disable no-bitwise */
export function stringToHash(s) {
  const len = s.length;
  let hash = 0;
  for (let idx = 0; idx < len; idx += 1) {
    hash = ((hash << 5) - hash + s.charCodeAt(idx)) | 0;
  }
  return hash;
}
