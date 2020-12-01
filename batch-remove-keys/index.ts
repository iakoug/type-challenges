// ts version @4.1.2
// TypeScript 4.1 allows you to re-map keys in mapped types with a new as clause.

export {};

type BatchRemoveKeys<T, K extends keyof T> = {
  [P in K as Exclude<keyof T, K>]: T[P];
  //      ^^^^^^^^^^^^^^^^^^^^^^
  //      This is the new syntax!
};

type Result = BatchRemoveKeys<{ name; age; gender }, "age" | "name">; // { gender; }

// Omit:
// type Solutions2<T, K extends keyof T> = Omit<T, K>;
// type Result2 = Solutions2<{ name; age; gender }, "age" | "name">; // { gender; }
