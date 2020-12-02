import { Equal, Expect } from "@type-challenges/utils";
import { GetReadonlyKeys, GetReadonlyKeys2 } from "./";

type cases = [
  Expect<Equal<"title", GetReadonlyKeys<Todo1>>>,
  Expect<Equal<"title", GetReadonlyKeys2<Todo1>>>,
  Expect<Equal<"title" | "description", GetReadonlyKeys<Todo2>>>,
  Expect<Equal<"title" | "description", GetReadonlyKeys2<Todo2>>>
];

interface Todo1 {
  readonly title: string;
  description: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  readonly description: string;
  completed?: boolean;
}
