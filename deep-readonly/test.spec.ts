import { Equal } from "@type-challenges/utils";
import { Expect } from "@type-challenges/utils";
type Human = {
  name: string;
  age;
  son?: Human;
  friends?: Human[];
  hobbies: {
    a?: any;
  };
};

type Result = DeepOnly<Human>;

type cases = [
  Expect<
    Equal<
      Result,
      {
        readonly name: string;
        readonly age: any;
        readonly son?: DeepOnly<Human>;
        readonly friends?: readonly DeepOnly<Human>[];
        readonly hobbies: DeepOnly<{
          a?: any;
        }>;
      }
    >
  >
];
