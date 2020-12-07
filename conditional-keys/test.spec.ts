import { Equal, Expect } from '@type-challenges/utils';

interface Example {
  a: string;
  b: string | number;
  c?: string;
  e: string;
  f: number;
}

type cases = [
  Expect<Equal<ConditionalKeys<Example, string>, 'a' | 'e'>>,
  Expect<Equal<ConditionalKeys<Example, number>, 'f'>>
];
