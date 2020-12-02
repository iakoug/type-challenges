type Curry<T extends Function> = T extends (
  p: infer P,
  ...rest: infer Rest
) => infer R
  ? Rest["length"] extends 0
    ? T
    : (p: P) => Curry<(...rest: Rest) => R>
  : never;

declare function Currying<T extends (...args: any[]) => any>(fn: T): Curry<T>;
