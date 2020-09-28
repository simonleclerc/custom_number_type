import { increment } from './increment';

describe('increment', () => {
  it('should be true', () => {
    const result = increment();

    expect(result).toEqual(true);
  });
});
