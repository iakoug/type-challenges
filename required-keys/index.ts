export {};

type Human = {
  name?;
  age?;
  gender;
  birth;
};

type RequiredKeys<T> = {
  [P in keyof T]: object extends Pick<T, P> ? never : P;
}[keyof T];

type Result = RequiredKeys<Human>; // gender | birth
