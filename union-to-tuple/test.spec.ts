import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<UnionToTuple<1 | 2 | 3>, [1, 2, 3]>>,
  Expect<Equal<UnionToTuple<{ age } | { name }>, [{ age }, { name }]>>
];
