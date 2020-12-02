// ts version @4.1.2
// new feature Lowercase Uppercase

export type CamelCase<
  S extends string
> = S extends `${infer P1}_${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
  : Lowercase<S>;

export type CamelCase1<S extends string> = S extends `${infer P1}_${infer P2}`
  ? `${Lowercase<P1>}${Capitalize<CamelCase1<P2>>}`
  : Lowercase<S>;
