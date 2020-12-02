# UnionToTuple

实现高级类型`UnionToTuple<T>`，将 Union 类型 T 转为 Tuple

For example
```ts
type Result = UnionToTuple<1 | 2 | 3> // Expect to be [1, 2, 3]
```