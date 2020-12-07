type ConditionalKeys<Base, Condition> = NonNullable<
  {
    [Key in keyof Base]: Pick<Base, Key> extends { [K in Key]-?: Base[Key] }
      ? Base[Key] extends Condition
        ? Key
        : never
      : never;
  }[keyof Base]
>;
