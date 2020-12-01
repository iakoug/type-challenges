export {};

type Human = {
  name: string;
  age;
  son?: Human;
  friends?: Human[];
  hobbies: {
    a?: any;
  };
};

type DeepOnly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepOnly<T[P]> : T[P];
};

type Result = DeepOnly<Human>;

const human: Result = {
  age: 123,
  name: "",
  hobbies: {a: 123},
};

// human.friends[1] = {} as Human // Index signature in type 'readonly DeepOnly<Human>[]' only permits reading.
// human.hobbies.a = 345 // Cannot assign to 'a' because it is a read-only property.

console.log(human);
