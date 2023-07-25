import { Record } from '../types/record';

/**
 * Inverte as posições das chaves e dos valores de um objeto.
 *
 * ex.:
 * invert({ 'a': 1, 'b': 2, 'c': 1 }) === { '1': 'c', '2': 'b' };
 *
 * @param record
 * @returns
 */
export const invert = (record: Record): Record => {
  const objInvert = {};
  const keysRecord = Object.keys(record); //a b c

  for (let i = 0; keysRecord.length > i; i++) {
    const valuesRecord = record; // { a: 1, b: 2, c: 1 }
    const key = keysRecord[i]; // a
    const value = valuesRecord[key]; // 1

    objInvert[value] = key; // 1:a...
  }
  return objInvert;
};
