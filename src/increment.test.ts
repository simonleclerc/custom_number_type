import { increment } from './increment';

describe('increment', () => {
  it('increment the number and return the array of digit', () => {
    const result = increment(['9','0','1']);

    expect(result).toEqual(['9','0', '2']);
  });
});
