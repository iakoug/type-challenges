type UnionToIntersection<T> = (T extends any ? (k: T) => void : never) extends (
  k: infer R
) => void
  ? R
  : never;
