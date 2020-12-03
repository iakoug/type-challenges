type DeepOnly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepOnly<T[P]> : T[P];
};
