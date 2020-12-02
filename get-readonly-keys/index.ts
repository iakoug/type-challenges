type Equal<P, K> = (<T>() => T extends P ? 1 : 2) extends <T>() => T extends K
  ? 1
  : 2
  ? true
  : false;

export type GetReadonlyKeys<T> = {
  [P in keyof T]: Equal<
    { -readonly [p in P]: T[P] },
    { [p in P]: T[P] }
  > extends true
    ? never
    : P;
}[keyof T];

export type GetReadonlyKeys2<T> = {
  [P in keyof T]: (<U>() => U extends { [p in P]: T[P] } ? 1 : 2) extends <
    U
  >() => U extends { -readonly [p in P]: T[P] } ? 1 : 2
    ? never
    : P;
}[keyof T];
