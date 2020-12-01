# BatchRemoveKeys

Implement BatchRemoveKeys<T>. 批量移除指定属性

Case:

```ts
type Result = BatchRemoveKeys<{ age; name; gender, 'age' | 'name'}>; // expected to be { gender }
```
