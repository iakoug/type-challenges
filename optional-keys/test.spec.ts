import { Equal } from "@type-challenges/utils";
import { Expect } from "@type-challenges/utils";

type Human = {
  name?;
  age?;
  gender;
  birth;
};

type Result = OptionalKeys<Human>; // name | age

type cases = [Expect<Equal<Result, "name" | "age">>];
