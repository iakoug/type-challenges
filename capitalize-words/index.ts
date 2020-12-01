// type Gap = " " | "," | ".";
// type CapitalizeWords<
//   T extends string
// > = T extends `${infer P1}${Gap}${infer P2}`
//   ? T extends `${P1}${infer Indicator}${P2}`
//     ? `${Capitalize<P1>}${Indicator}${Capitalize<CapitalizeWords<P2>>}`
//     : T
//   : T;

type CapitalizeWords<T extends string> = T extends `${infer P1} ${infer P2}`
  ? `${CapitalizeWords<P1>} ${Capitalize<CapitalizeWords<P2>>}`
  : T extends `${infer P1},${infer P2}`
  ? `${CapitalizeWords<P1>},${Capitalize<CapitalizeWords<P2>>}`
  : T extends `${infer P1}.${infer P2}`
  ? `${CapitalizeWords<P1>}.${Capitalize<CapitalizeWords<P2>>}`
  : Capitalize<T>;

type capitalized = CapitalizeWords<"foo bar.hello,world">; // expected to be 'Hello World, My Friends'
