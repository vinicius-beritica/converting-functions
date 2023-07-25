/**
 * Converte a string para pascal case (semelhante ao camel case, mas com a primeira letra maiuscula)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para pascalCase.
 */
export const pascalCase = (word: string): string => {
  let arrayStr: string[] = word.split('');

  for (let i: number = 0; arrayStr.length > i; i++) {
    arrayStr[0] = arrayStr[0].toUpperCase();
    if (arrayStr[i] === ' ' || arrayStr[i] === '-' || arrayStr[i] === '_') {
      arrayStr[i] = '';
      arrayStr[i + 1] = arrayStr[i + 1].toUpperCase();
    }
  }
  return arrayStr.join('');
};
