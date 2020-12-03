type RequiredKeys<T> = {
  [P in keyof T]: object extends Pick<T, P> ? never : P;
}[keyof T];
