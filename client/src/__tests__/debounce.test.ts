import { describe, expect, it, beforeEach } from '@jest/globals';
import { debounce } from '../utils/debounce';

describe('Debounce function without arguments', () => {
  let delay: number;
  let myMock: jest.Mock;
  let debouncedFunction: Function;

  beforeEach(() => {
    delay = 200;
    myMock = jest.fn();
    debouncedFunction = debounce(myMock, delay);
  });

  it('Should debounce function calls and execute only once after delay', async () => {
    // muchas veces llamamos funcion de debouncedFunction
    for (let i = 0; i < 100; i++) {
      await debouncedFunction();
    }

    // Pausa para llamar a un callback en debounce
    await new Promise((resolve) => setTimeout(resolve, delay));

    expect(myMock).toHaveBeenCalledTimes(1);
  });

  it('Should debounce single call and execute once after delay', async () => {
    await debouncedFunction();

    // Pausa para llamar a un callback en debounce
    await new Promise((resolve) => setTimeout(resolve, delay));

    expect(myMock).toHaveBeenCalledTimes(1);
  });

  it('Should make two call callback function', async () => {
    for (let i = 0; i < 100; i++) {
      await debouncedFunction();
      if (i === 50) {
        // Pausa para llamar a un callback en debounce
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }

    // Pausa para llamar a un callback en debounce
    await new Promise((resolve) => setTimeout(resolve, delay));

    expect(myMock).toHaveBeenCalledTimes(2);
  });
});

describe('Debounce function with different arguments', () => {
  let delay: number;
  let myMock: jest.Mock;
  let debouncedFunction: Function;

  beforeEach(() => {
    delay = 200;
    myMock = jest.fn();
    debouncedFunction = debounce(myMock, delay);
  });

  it('Should call with last argument', async () => {
    const arrOfArguments: [string, string, string] = [
      'arg 1',
      'arg 2',
      'arg 3',
    ];

    for (let i = 0; i < arrOfArguments.length; i++) {
      await debouncedFunction(arrOfArguments[i]);
    }

    // Pausa para llamar a un callback en debounce
    await new Promise((resolve) => setTimeout(resolve, delay));

    expect(myMock).toHaveBeenCalledTimes(1);
    expect(myMock).toHaveBeenCalledWith('arg 3');
  });
});
