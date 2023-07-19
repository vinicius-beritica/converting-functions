import { lowerCaseFirst } from '../src/lowerCaseFirst';

describe('lowerCaseFirst', () => {
  it('deve tornar a primeira letra minúscula', () => {
    const expectation = 'lorem ipsum';
    const frases = ['lorem ipsum', 'Lorem ipsum'];

    frases.forEach(frase => expect(lowerCaseFirst(frase)).toEqual(expectation));

    expect(lowerCaseFirst('lorem Ipsum')).toEqual('lorem Ipsum');
    expect(lowerCaseFirst('Lorem Ipsum')).toEqual('lorem Ipsum');
    expect(lowerCaseFirst('LOREM Ipsum')).toEqual('lOREM Ipsum');
  });
});
