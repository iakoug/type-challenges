type FilterOut<T, K, Res extends any[] = []> = T extends [
  infer P,
  ...infer Rest
]
  ? [P] extends [K]
    ? FilterOut<Rest, K, [...Res]>
    : FilterOut<Rest, K, [...Res, P]>
  : Res;
