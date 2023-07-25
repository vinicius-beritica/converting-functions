import { Record } from '../types/record';

/**
 * Esta função mantem somente os campos de um objeto passado via parametro.
 *
 * > Importante: o objeto original não pode ser alterado.
 *
 * Ex.: pick({ a: 'lorem', b: 'ipsum', c: 'dolor'  }, 'a', 'b') === { a: 'lorem', b: 'ipsum' }
 *
 * @param record
 * @param args
 * @returns
 */
export const pick = <T extends Record>(
  record: T,
  ...args: (keyof T)[]
): Record => {
  const assignObj = Object.assign({}, record);
  const newObj = {};
  const parameters = [...args];
  for (let i = 0; parameters.length > i; i++) {
    if (Object.keys(assignObj[parameters[i]])) {
      Object.defineProperty(newObj, parameters[i].toString(), {
        value: assignObj[parameters[i]],
        writable: true,
        configurable: true,
        enumerable: true,
      });
    }
  }
  return newObj;
};
