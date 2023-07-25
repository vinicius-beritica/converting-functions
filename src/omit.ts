import { Record } from '../types/record';

/**
 * Esta função remove os campos de um objeto passado via parametro.
 *
 * > Importante: o objeto original não pode ser alterado.
 *
 * Ex.: omit({ a: 'lorem', b: 'ipsum', c: 'dolor'  }, 'a', 'b') === { c: 'dolor' }
 *
 * @param record
 * @param args
 * @returns
 */
export const omit = <T extends Record>(
  record: T,
  ...args: (keyof T)[]
): Record => {
  const assObj = Object.assign({}, record);
  const param = [...args];
  for (let i = 0; param.length > i; i++) {
    if (Object.keys(assObj[param[i]])) {
      delete assObj[param[i]];
    }
  }
  return assObj;
};
