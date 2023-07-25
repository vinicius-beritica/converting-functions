import { KeyAndValue } from '../types/keyAndValue';

/**
 * Deve criar um objeto a partir da lista de arrays chave/valor
 *
 * Ex.: fromPairs(['a', 'a'], ['b': 1], ['c': false]) === { a: 'a', b: 1, c: false }
 *
 * @param args
 * @returns
 */
export const fromPairs = (...args: KeyAndValue[]) => {
  const obj = {};
  for (let i = 0; args.length > i; i++) {
    for (let j = 0; args[i].length > j; j++) {
      const key = args[i][j].toString();
      const value = args[i][j + 1];
      if (!obj[key]) {
        obj[key] = value;
      }
    }
  }
  return obj;
};
