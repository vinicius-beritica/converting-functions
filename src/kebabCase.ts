/**
 * Converts string to camel case (https://en.wikipedia.org/wiki/Letter_case#Special_case_styles)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para kebabCase.
 */
export const kebabCase = (word: string): string => {
  const strLowerCase: string = word.toLowerCase();
  const strReplace: string = strLowerCase.replace(/ /g, '-').replace(/_/g, '-');
  return strReplace;
};
