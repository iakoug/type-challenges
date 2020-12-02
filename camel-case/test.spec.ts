import { Equal, Expect } from "@type-challenges/utils";
import { CamelCase, CamelCase1 } from "./";

type cases = [
  Expect<Equal<CamelCase<"foobar">, "foobar">>,
  Expect<Equal<CamelCase<"FOOBAR">, "foobar">>,
  Expect<Equal<CamelCase<"foo_bar">, "fooBar">>,
  Expect<Equal<CamelCase<"foo_bar_hello_world">, "fooBarHelloWorld">>,
  Expect<Equal<CamelCase<"HELLO_WORLD_WITH_TYPES">, "helloWorldWithTypes">>,
  Expect<Equal<CamelCase<"">, "">>,
  Expect<Equal<CamelCase1<"foobar">, "foobar">>,
  Expect<Equal<CamelCase1<"FOOBAR">, "foobar">>,
  Expect<Equal<CamelCase1<"foo_bar">, "fooBar">>,
  Expect<Equal<CamelCase1<"foo_bar_hello_world">, "fooBarHelloWorld">>,
  Expect<Equal<CamelCase1<"HELLO_WORLD_WITH_TYPES">, "helloWorldWithTypes">>,
  Expect<Equal<CamelCase1<"">, "">>
];
