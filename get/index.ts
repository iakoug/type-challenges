type Get<T, K> = K extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? Get<T[Key], Rest>
    : never
  : K extends keyof T
  ? T[K]
  : never;
