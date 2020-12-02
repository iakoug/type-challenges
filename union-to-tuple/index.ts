type UnionToIntersectionFunction<U> = (
  U extends any ? (k: (k: U) => void) => void : never
) extends (k: infer I) => void
  ? I
  : never;

type LastOf<T> = UnionToIntersectionFunction<T> extends (k: infer R) => void
  ? R
  : never;

// TS4.1+
type UnionToTuple<
  T,
  L = LastOf<T>,
  N = [T] extends [never] ? true : false
> = true extends N ? [] : [...UnionToTuple<Exclude<T, L>>, L];
