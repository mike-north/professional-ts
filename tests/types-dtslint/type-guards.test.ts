/* eslint-disable sonarjs/no-duplicated-branches */
import { isTypedArray } from '.';

function test1() {
  const arr: Array<number | string> = [];
  if (isTypedArray(arr, (x): x is number => typeof x === 'number')) {
    arr; // $ExpectType number[]
  } else if (
    isTypedArray(arr, (x): x is string => typeof x === 'string')
  ) {
    arr; // $ExpectType string[]
  }
}

test1();
