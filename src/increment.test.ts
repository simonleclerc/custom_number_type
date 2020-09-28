import { increment } from './increment';

describe('increment', () => {
  it('return the number', () => {
    const result = increment(['9','0','1']);

    expect(result).toEqual(901);
  });
});
