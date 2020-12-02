import { TupleToUnion1, TupleToUnion2, TupleToUnion3 } from "./";
import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<TupleToUnion1<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion1<[123]>, 123>>,
  Expect<Equal<TupleToUnion2<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion2<[123]>, 123>>,
  Expect<Equal<TupleToUnion3<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion3<[123]>, 123>>
];
