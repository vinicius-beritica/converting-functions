/**
 * Retorna apenas os itens do array da esquerda (primeiro parâmetro) não presentes no array da direita (segundo parâmetro)
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
export const difference = (left: number[], right: number[]): number[] => {
  const arrDifference = [];
  for (let i = 0; left.length > i; i++) {
    for (let j = 0; right.length > j; j++) {
      if (right[j] !== left[i]) {
        arrDifference.push(left[i]);
      }
    }
  }
  return arrDifference;
};
