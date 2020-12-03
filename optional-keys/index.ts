type OptionalKeys<T> = {
  [P in keyof T]: object extends Pick<T, P> ? P : never;
}[keyof T];
