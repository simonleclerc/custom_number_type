import { increment } from './increment';

describe('increment', () => {
  it('increment the number and return it', () => {
    const result = increment(['9','0','1']);

    expect(result).toEqual(902);
  });
});
