import { Equal } from "@type-challenges/utils";
import { Expect } from "@type-challenges/utils";

type Human = {
  name?;
  age?;
  gender;
  birth;
};

type Result = RequiredKeys<Human>; // gender | birth

type cases = [Expect<Equal<Result, "gender" | "birth">>];
