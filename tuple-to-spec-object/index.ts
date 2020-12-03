type UTI<T> = (T extends any ? (k: T) => void : never) extends (
  k: infer R
) => void
  ? R
  : never;

export type TransTupleToSpecObject<T> = UTI<
  T extends any[]
    ? {
        [K in T[0]]: T extends [infer R, ...infer Rest] ? Rest : never;
      }
    : never
>;

export type TransTupleToSpecObject2<T extends any[]> = {
  [K in T[0]]: Extract<T, [K, ...any]> extends [infer R, ...infer Rest]
    ? Rest
    : never;
};
