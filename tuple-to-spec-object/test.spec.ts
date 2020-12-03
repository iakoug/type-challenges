import { Equal, Expect, ExpectFalse, NotEqual } from "@type-challenges/utils";
import { TransTupleToSpecObject, TransTupleToSpecObject2 } from "./";

type A = [1, 2, 3];
type B = [2, 1, 3];
type C = [3, 1, 2];

type cases = [
  Expect<
    Equal<
      TransTupleToSpecObject2<A | B | C>,
      {
        3: [1, 2];
        1: [2, 3];
        2: [1, 3];
      }
    >
  >,
  Expect<
    Equal<
      TransTupleToSpecObject<A | B | C>,
      {
        1: [2, 3];
      } & {
        2: [1, 3];
      } & {
        3: [1, 2];
      }
    >
  >
];
