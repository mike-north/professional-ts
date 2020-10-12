import { isTypedArray } from '.';
import { expectType } from 'tsd';

const testVal = [1, 23] as (number | string)[];

if (
  isTypedArray(testVal, (x): x is string => typeof x === 'string')
) {
  expectType<string[]>(testVal);
} else if (
  isTypedArray(testVal, (x): x is number => typeof x === 'number')
) {
  expectType<number[]>(testVal);
}
