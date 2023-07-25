/**
 * Retorna um array com todos os elementos únicos.
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
export const uniq = <T>(args: T[]): T[] => {
  const arrUniq = [];
  for (let i = 0; args.length > i; i++) {
    for (let j = 0; args.length > j; j++) {
      if (args[j] === args[i]) {
        let exists = false;
        for (let k = 0; arrUniq.length > k; k++) {
          if (args[i] === arrUniq[k]) {
            exists = true;
          }
        }
        if (!exists) {
          arrUniq.push(args[i]);
        }
      }
    }
  }
  return arrUniq;
};
