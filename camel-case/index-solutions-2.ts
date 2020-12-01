// ts version @4.1.2
// new feature Capitalize and Uncapitalize

export {};

type CamelCase<S extends string> = S extends `${infer P1}_${infer P2}`
  ? `${Lowercase<P1>}${Capitalize<CamelCase<P2>>}`
  : Lowercase<S>;

type Result = CamelCase<"aaaa_bb_c_ddd_E_FF">; // aaaaBbCDddEFf
