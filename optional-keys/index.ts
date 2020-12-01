export {};

type Human = {
  name?;
  age?;
  gender;
  birth;
};

type OptionalKeys<T> = {
  [P in keyof T]: object extends Pick<T, P> ? P : never;
}[keyof T];

type Result = OptionalKeys<Human>; // name | age
