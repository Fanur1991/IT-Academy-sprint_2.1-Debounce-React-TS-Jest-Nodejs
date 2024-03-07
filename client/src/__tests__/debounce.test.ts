import { describe, expect, it, beforeEach } from '@jest/globals';
import { debounce } from '../utils/debounce';

describe('Debounce function', () => {
  it('Should make only one call callback function', async () => {
    const delay: number = 200;
    const myMockFn = jest.fn();
    const debouncedFunction = debounce(myMockFn, delay);

    await debouncedFunction('D');
    await debouncedFunction('Di');
    await debouncedFunction('Div');
    await debouncedFunction('Divi');
    await debouncedFunction('Divin');
    await debouncedFunction('Divine');

    await new Promise((resolve) => setTimeout(resolve, delay));

    expect(myMockFn).toHaveBeenCalledTimes(1);
  });
});
