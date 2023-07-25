/**
 * Converts string to camel case (https://en.wikipedia.org/wiki/Snake_case)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para snakeCase.
 */
export const snakeCase = (word: string): string => {
  const strReplace: string = word.replace(/[\s* \- ]/g, '_');
  const strSnakeCase: string =
    strReplace.charAt(0).toLowerCase() + strReplace.slice(1);
  return strSnakeCase;
};
