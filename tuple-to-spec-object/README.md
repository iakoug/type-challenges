# TupleToSpecObject

实现高级类型`TupleToSpecObject<T>`，将联合类型的元组转为对象类型，对象的键是元组的第一项，值是元组第一项之外的集合（依然是元组）

> 需要注意键值是否相同的两种情况

For example

```ts
type A = [1, 2, 3];
type B = [2, 1, 3];
type C = [3, 1, 2];

type Result = TupleToSpecObject<A | B | C>;
// Expect to be
// {
//     1: [2, 3];
//     2: [1, 3];
//     3: [1, 2];
// }
```
