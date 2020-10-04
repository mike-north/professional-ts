import { expectNotAssignable, expectType } from 'tsd';
import concat from '.';

expectType<string>(concat('foo', 'bar'));
expectType<string>(concat(1, '2'));
expectType<number>(concat(1, 2));

expectNotAssignable<number>(concat('hello, ', 'world')); // Deliberately an error
