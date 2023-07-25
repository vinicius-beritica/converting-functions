/**
 * Retorna um array com todos os elementos únicos de todos os arrays operados
 * pela união.
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
export const union = <T>(...args: T[]): T[] => {
  const arrUnion = [];
  const param = args as unknown as ArrayLike<T>[];
  for (let i = 0; param.length > i; i++) {
    for (let j = 0; param[i].length > j; j++) {
      let exists = false;
      for (let k = 0; arrUnion.length > k; k++) {
        if (param[i][j] === arrUnion[k]) {
          exists = true;
        }
      }
      if (!exists) {
        arrUnion.push(param[i][j]);
      }
    }
  }
  return arrUnion;
};
