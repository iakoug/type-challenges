// ts version @4.1.2

export type TupleToUnion1<T extends any[]> = T[number];

export type TupleToUnion2<T> = T extends (infer R)[] ? R : never;

export type TupleToUnion3<T, Result = never> = T extends [infer R, ...infer P]
  ? TupleToUnion3<P, Result | R>
  : Result;
