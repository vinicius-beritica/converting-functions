/**
 * Converts string to camel case (https://en.wikipedia.org/wiki/CamelCase)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para camelCase.
 */
export const camelCase = (word: string): string => {
  const strCamelCase: string[] = word.split('');

  for (let i: number = 0; strCamelCase.length > i; i++) {
    strCamelCase[0] = strCamelCase[0].toLowerCase();
    if (
      strCamelCase[i] == ' ' ||
      strCamelCase[i] == '-' ||
      strCamelCase[i] == '_'
    ) {
      strCamelCase[i] = '';
      strCamelCase[i + 1] = strCamelCase[i + 1].toUpperCase();
    }
  }
  return strCamelCase.join('');
};
