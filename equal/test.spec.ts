import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<EqualValue<number, string>, false>>,
  Expect<Equal<EqualValue<{}, {}>, true>>,
  Expect<Equal<EqualValue<any, number>, false>>,
  Expect<Equal<EqualValue<any, any>, true>>,
  Expect<Equal<EqualValue<{ age }, { age }>, true>>
];
