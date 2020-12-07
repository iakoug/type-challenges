# GetReadonlyKeys

Extract the keys from a type where the value type of the key extends the given `Condition`.
Internally this is used for the `ConditionalPick` and `ConditionalExcept` types.
@example

```ts
interface Example {
  a: string;
  b: string | number;
  c?: string;
  d: {};
}
type StringKeysOnly = ConditionalKeys<Example, string>;
//=> 'a'
```

**[Answer](./index.ts)**

**[Test cases](./test.spec.ts)**
