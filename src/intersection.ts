/**
 * Retorna um array de itens únicos e comuns entre os arrays da direita e da esquerda.
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
export const intersection = (left: number[], right: number[]): number[] => {
  const arrIntersec = [];
  for (let i = 0; left.length > i; i++) {
    for (let j = 0; right.length > j; j++) {
      if (right[j] === left[i]) {
        let exists = false;
        for (let k = 0; arrIntersec.length > k; k++) {
          if (left[i] === arrIntersec[k]) {
            exists = true;
          }
        }
        if (!exists) {
          arrIntersec.push(left[i]);
        }
      }
    }
  }
  return arrIntersec;
};
