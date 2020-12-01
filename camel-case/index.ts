// ts version @4.1.2
// new feature Lowercase Uppercase

export {};

type CamelCase<
  S extends string
> = S extends `${infer P1}_${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
  : Lowercase<S>;

type Result = CamelCase<"aaaa_bb_c_ddd_E_FF">; // aaaaBbCDddEFf
