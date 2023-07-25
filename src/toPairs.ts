import { KeyAndValue } from '../types/keyAndValue';
type Record = {
  [key: string]: string | number | symbol | boolean;
};

/**
 * Deve criar uma lista de arrays chave/valor a partir de um objeto
 *
 * Ex.: fromPairs({ a: 'a', b: 1, c: false }) === [['a', 'a'], ['b': 1], ['c': false]]
 *
 * @param args
 * @returns
 */
export const toPairs = (record: Record): KeyAndValue[] => {
  const arrToPairs = [];
  const keys = Object.keys(record);
  for (let i = 0; keys.length > i; i++) {
    arrToPairs.push([keys[i], record[keys[i]]]);
  }
  return arrToPairs;
};
