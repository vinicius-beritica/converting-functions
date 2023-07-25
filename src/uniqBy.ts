import { Record } from '../types/record';

/**
 * Retorna um array com todos os elementos únicos, diferenciados entre si por um atributo, identificado pelo segundo
 * parametro.
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 * > Importante: Caso dois objetos diferentes estejam presentes na lista, mas com o identificador igual,
 * prevalece o primeiro item encontrado.
 *
 * Ex.: uniqBy([{a: 1, b: 2}, {a: 1, b: 1}, {a: 2, b: 2}], 'a')
 *
 * é igual
 *
 * [{a: 1, b: 2}, {a: 2, b: 2}]
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
export const uniqBy = <T extends Record>(args: T[], key: keyof T): T[] => {
  const objUniqBy: T[] = [];

  for (let i = 0; args.length > i; i++) {
    const itemsArgs = args[i];
    const valueArgs = itemsArgs[key];
    let exists = false;
    for (let j = 0; objUniqBy.length > j; j++) {
      if (objUniqBy[j][key] === valueArgs) {
        exists = true;
      }
    }
    if (!exists) {
      objUniqBy.push(itemsArgs);
    }
  }

  return objUniqBy;
};
