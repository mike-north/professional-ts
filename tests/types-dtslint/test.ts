import { isTypedArray } from 'my-project';

// $ExpectType boolean
isTypedArray(
  ['foo', 'bar', 'baz'],
  (x: any): x is string => typeof x === 'string',
);

// $ExpectType (string | number)[]
[1, 2, 3, '4', 'foo'].filter((x) => typeof x === 'string');

// $ExpectType string[]
[1, 2, 3, '4', 'foo'].filter((x): x is string => typeof x === 'string');
