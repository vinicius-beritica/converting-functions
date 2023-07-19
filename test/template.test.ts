import { template } from '../src/template';

describe('template', () => {
  it('Deve interpolar o texto a partir do template informado à fn', () => {
    const formulario =
      'autor: {{name}}; nacionalidade: {{country}}; frase: "{{quote}}"';
    const respostas = [
      {
        name: 'Edgar Allan Poe',
        country: 'USA',
        quote: 'I became insane, with long intervals of horrible sanity.',
      },
      {
        name: 'H. P. Lovecraft',
        country: 'USA',
        quote: 'The world is indeed comic, but the joke is on mankind.',
      },
      {
        name: 'J. R. R. Tolkien',
        country: 'England',
        quote: 'Not all those who wander are lost.',
      },
    ];
    const expected = respostas.map(
      r => `autor: ${r.name}; nacionalidade: ${r.country}; frase: "${r.quote}"`,
    );
    respostas.forEach((r, index) =>
      expect(template(formulario, r)).toEqual(expected[index]),
    );
  });
});
