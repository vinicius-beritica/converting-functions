import { toPath } from '../src/toPath';

describe('toPath', () => {
  it('deve transformar um path em array de posicoes de um objeto', () => {
    expect(toPath('campo1.campo2[0].campo3')).toEqual([
      'campo1',
      'campo2',
      '0',
      'campo3',
    ]);
  });
});
