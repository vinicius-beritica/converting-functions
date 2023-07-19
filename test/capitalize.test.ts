import { capitalize } from '../src/capitalize';

describe('capitalize', () => {
  it('deve transformar os textos em formato capitalizado', () => {
    const expectation = 'Lorem ipsum';
    const frases = ['LOREM IPSUM', 'lorem ipsum'];

    frases.forEach(frase => expect(capitalize(frase)).toEqual(expectation));
  });
});
