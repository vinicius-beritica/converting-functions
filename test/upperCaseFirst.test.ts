import { upperCaseFirst } from '../src/upperCaseFirst';

describe('upperCaseFirst', () => {
  it('deve tornar a primeira letra minúscula', () => {
    const expectation = 'Lorem ipsum';
    const frases = ['lorem ipsum', 'Lorem ipsum'];

    frases.forEach(frase => expect(upperCaseFirst(frase)).toEqual(expectation));

    expect(upperCaseFirst('lorem Ipsum')).toEqual('Lorem Ipsum');
    expect(upperCaseFirst('Lorem Ipsum')).toEqual('Lorem Ipsum');
    expect(upperCaseFirst('LOREM Ipsum')).toEqual('LOREM Ipsum');
  });
});
