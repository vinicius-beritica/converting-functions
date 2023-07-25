/**
 * Deve criar um array de tamanho igual ao primeiro parâmetro, iniciando pelo número do segundo.
 * Por Padrão, o ponto de partida será zero.
 *
 * exemplo:
 * range(10, 3) === [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
 *
 * @param size
 * @param start
 */
export const range = (size: number, start = 0) => {
  const rangeItems = [];
  for (let i = 0; size > i; i++) {
    rangeItems.push(i + start);
  }
  return rangeItems;
};
