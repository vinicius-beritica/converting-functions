/**
 * Converts string to start case (https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para startCase.
 */
export const startCase = (word: string): string => {
  const strStarCase: string[] = word.split('');

  for (let i: number = 0; strStarCase.length > i; i++) {
    strStarCase[0] = strStarCase[0].toUpperCase();
    if (
      strStarCase[i] === '-' ||
      strStarCase[i] === '_' ||
      strStarCase[i] === ' '
    ) {
      strStarCase[i] = ' ';
      strStarCase[i + 1] = strStarCase[i + 1].toUpperCase();
    }
  }
  return strStarCase.join('');
};
