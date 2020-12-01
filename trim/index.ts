type Space = " " | "\n" | "\t";

type Trim<T extends string> = T extends `${infer P1}${Space}`
  ? Trim<P1>
  : T extends `${Space}${infer P2}`
  ? Trim<P2>
  : T;
