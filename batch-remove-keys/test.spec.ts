import { Equal } from "@type-challenges/utils";
import { Expect } from "@type-challenges/utils";

type cases = [
  Expect<
    Equal<BatchRemoveKeys<{ name; age; gender }, "age" | "name">, { gender }>
  >,
  Expect<
    Equal<BatchRemoveKeys<{ name; age; }, "age">, { name }>
  >
];
